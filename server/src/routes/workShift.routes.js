/* eslint-disable linebreak-style */
const router = require('express').Router();
const {
  createShift,
  getAllShifts,
  deleteShift,
  addToShift,
} = require('../controllers/shift.controller');

// @route   GET api/v1/workshifts

// @desk    view all shifts

// access   public

router.get("/all", getAllShifts)



// @route   POST api/v1/workshift/:id

// @desk    create new shift

// access   Private

router.post("/create", createShift)



// @route   PUT api/v1/workshift/:id

// @desk    Update Contact

// access   Private, admin only

router.put("/add/:shiftId", addToShift)



// @route   DELETE api/v1/workshift/:id

// @desk    Delete contact

// access   Private

router.delete("/delete/:shiftId", deleteShift)



module.exports = router