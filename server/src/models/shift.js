const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const ShiftSchema = Joi.object({
	shiftId: Joi.string().guid({ version: "uuidv4" }).required(),
	shiftName: Joi.string().required(),
    adminId: Joi.objectId(),
    employeeId: Joi.objectId(),
	shiftType: Joi.string()
		.required()
		.valid("day", "night")
		.messages({ "any.only": "Invalid shift type! Try day or night" }),
	members: [Joi.objectId()],
	isDeleted: Joi.boolean().required(),
	permissions: Joi.string().default("view"),
	description: Joi.string().required().max(250),
	createdAt: Joi.date().default(new Date().toISOString()),
	isPrivate: Joi.boolean().default(true),
});

module.exports = ShiftSchema;

/*
starttime, endtime, shiftmode, department */
