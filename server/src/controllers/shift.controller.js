const DatabaseConnection = require("../models/db.model");
const Shifts = new DatabaseConnection("NewShifts");
const ShiftSchema = require("../models/shift");
const uuid = require("uuid").v4;
const slugify = require("slugify");
const {
	BadRequestError,
	InternalServerError,
	NotFoundError,
} = require("../utils/appError");
const appResponse = require("../utils/appResponse");

exports.createShift = async (req, res) => {
	const { body } = req;
	body.shiftId = uuid();
	const shift = await ShiftSchema.validateAsync(body);
	shift.members = [];
	shift.slug = slugify(shift.shiftName, {
		lower: true,
		remove: /[*+~\/\\.()''!:@]/g,
	});
	if (shift.shiftType === "day" || shift.shiftType === "night") {
		shift.isPrivate = true;
		shift.members = [shift.adminId, shift.employeeId];
	} else {
		shift.isPrivate = false;
	}
	const response = await Shifts.create(shift);
	res
		.status(201)
		.send(appResponse("Shift created successfully", response, true));
};

// Retrieve all Shifts from the database.

exports.getAllShifts = async (req, res) => {
	try {
		const { data: allShifts } = await Shifts.fetchAll();
		allShifts.forEach((shift) => (shift.memberCount = shift.members.length));
		res.status(200).send(appResponse("All shifts", allShifts, true));
	} catch (error) {
		throw new InternalServerError();
	}
};

// Delete all Shifts from the database.
exports.deleteShift = async (req, res) => {
	// filter out the target shift
	const response = await Shifts.delete(req.params.shiftId);
	res
		.status(200)
		.send(appResponse("Shift has been deleted successfully!", response, true));
};

// the info of the user to be added to a shift
exports.addToShift = async (req, res) => {
	try {
		const { userId } = req.body;
		res.status(200).send(appResponse("Shift has been deleted successfully!"));
	} catch (error) {
		if (!/^[0-9a-fA-F]{24}$/.test(userId)) {
			throw new BadRequestError("Invalid user id. Enter a valid object id!");
		}
	}
	const {
		data: [shift],
	} = await Shifts.fetchOne({ _id: req.params.shiftId });

	if (!shift) throw new NotFoundError();
	if (shift.isPrivate) throw new ForbiddenError(`You can't join a private shift!`);
	const isUserInShift = shift.members.filter((id) => id === userId).length;

	if (isUserInShift) throw new BadRequestError("User is already in shift!");

	// Add user to shift...
	shift.members.push(userId);
	delete shift._id;

	// send the data to the api endpoint for update.
	await Shifts.update(req.params.shiftId, shift);

	const {
		data: [updatedShift],
	} = await Shifts.fetchOne({ _id: req.params.shiftId });

	return res.status(200).send(appResponse(null, updatedShift, true));
};
