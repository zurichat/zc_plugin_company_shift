var express = require("express");

module.exports = (app) => {
	app.use(express.urlencoded({ extended: false }));
	app.use(express.json())
	const shifts = require("../controllers/shift.controller.js");
	var router = require("express").Router();

	/**
	 * @swagger
	 * /api/shifts:
	 *   post:
	 *     produces: 
	 *      - application/json
	 *     consumes: 
	 *      - application/json	
	 *     requestBody:
	 *       name: shift
	 *       description: New shift
	 *       content:
	 *         application/x-www-form-urlencoded:
	 *          schema:
	 *            type: object
	 *            properties:
	 *              employee_name:
	 *                type: string
	 *              title:
	 *                type: string
	 *              department:
	 *                type: string
	 *              creation_date:
	 *                type: string
	 *     responses:
	 *       200:
	 *         description: Successfully created
	 *       201:
	 *         description: Created
	 */  

	// Create a new Shift
	router.post("/", shifts.create);

	// This is working
	/**
	 * @swagger
	 * /api/shifts:
	 *  get:
	 *    description: All shifts
	 *    responses:
	 *      200:
	 *        description: Returns all the shifts
	*/

	// Retrieve all shifts
	router.get("/", shifts.findAll);

	// Retrieve all published shifts
	// router.get("/published", shifts.findAllPublished);

	/**
	 * @swagger
	 * /api/shifts/{id}:
	 *   get:
	 *     parameters:
	 *      - in: path
	 *        name: id
	 *        type: string
	 *        description: The shift ID.
	 *     description: Get a shift by id
	 *     responses:
	 *       200:
	 *         description: Returns the requested shift
	 */


	// Retrieve a single Shift with id
	router.get("/:id", shifts.findOne);

	// Working partially
	/**
	 * @swagger
	 * /api/shifts/{id}:
	 *   put:
	 *     produces:
	 *      - application/json
	 *     consumes: 
	 *      - application/json
	 *     parameters:
	 *      - in: path
	 *        name: id	
	 *        type: string
	 *        description: shift ID
	 *     requestBody:
	 *       description: Update shift
	 *       content:
	 *         application/x-www-form-urlencoded:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               employee_name:
	 *                 type: string
	 *               title:
	 *                 type: string
	 *               department:
	 *                 type: string
	 *               creation_date:
	 *                 type: string
	 *     responses:
	 *       201: Successfully updated
	 */

	// Update a Shift with id
	router.put("/:id", shifts.update);

	// this is working
	/**
	 * @swagger
	 * /api/shifts/{id}:
	 *   delete:
	 *     parameters:
	 *      - in: path
	 *        name: id
	 *        type: string
	 *        description: The shift ID.
	 *     description: Delete a shift by id
	 *     responses:
	 *       200:
	 *         description: Returns the requested catachphrase
	 */	

	// Delete a Shift with id
	router.delete("/:id", shifts.delete);

	// This is working
	/**
	 * @swagger
	 * /api/shifts/:
	 *   delete:
	 *     description: Delete all shift
	 *     responses:
	 *       200:
	 *         description: Successfully deleted all shifts
	 */	

	// Delete all shifts
	router.delete("/", shifts.deleteAll);

	app.use("/api/shifts", router);
};
