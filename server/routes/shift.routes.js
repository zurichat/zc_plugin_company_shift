module.exports = app => {
    const shifts = require("../controllers/shift.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Shift
    router.post("/", shifts.create);
  
    // Retrieve all shifts
    router.get("/", shifts.findAll);
  
    // Retrieve all published shifts
    // router.get("/published", shifts.findAllPublished);
  
    // Retrieve a single Shift with id
    router.get("/:id", shifts.findOne);
  
    // Update a Shift with id
    router.put("/:id", shifts.update);
  
    // Delete a Shift with id
    router.delete("/:id", shifts.delete);
  
    // Create a new Shift
    router.delete("/", shifts.deleteAll);
  
    app.use('/api/shifts', router);
  };