const db = require("../models/model");

const Shift = db.shifts;
console.log(Shift);
//create and save a new Shift

exports.create = (req, res) => {
	//validate request
	if (!req.body.title) {
		res.status(400).send({ message: "Content can not be empty!" });
		return;
	}
	//create a Shift
	const shift = new Shift({
		employee_name: req.body.employee_name,
		title: req.body.title,
		department: req.body.department,
		creation_date: req.body.creation_date,
	});
	shift
		.save(shift)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while creating the shift.",
			});
		});
};

// Retrieve all Shifts from the database.
exports.findAll = (req, res) => {
	const title = req.query.title;
	//   var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

	Shift.find(title)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving shifts.",
			});
		});
};

// Find a single Shift with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Shift.findById(id)
		.then((data) => {
			if (!data)
				res.status(404).send({ message: "Not found Shift with id " + id });
			else res.send(data);
		})
		.catch((err) => {
			res.status(500).send({ message: "Error retrieving Shift with id=" + id });
		});
};

// Update a Shift by the id in the request
exports.update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "Data to update can not be empty!",
		});
	}

	const id = req.params.id;

	Shift.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot update Shift with id=${id}. Maybe Shift was not found!`,
				});
			} else res.send({ message: "Shift was updated successfully." });
		})
		.catch((err) => {
			res.status(500).send({
				message: `Error updating Shift with id=${id}`,
			});
		});
};

// Delete a Shift with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	Shift.findByIdAndRemove(id)
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: `Cannot delete Shift with id=${id}. Maybe Shift was not found!`,
				});
			} else {
				res.send({
					message: "Shift was deleted successfully!",
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Could not delete Shift with id=" + id,
			});
		});
};

// Delete all Shifts from the database.
exports.deleteAll = (req, res) => {
	Shift.deleteMany({})
		.then((data) => {
			res.send({
				message: `${data.deletedCount} Shifts were deleted successfully!`,
			});
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while removing all Shifts.",
			});
		});
};

// Find all published Shifts
// exports.findAllPublished = (req, res) => {};
