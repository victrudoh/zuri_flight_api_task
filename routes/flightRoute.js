const express = require("express");

const router = express.Router();
const flightController = require("../controllers/flightController");

// All flights
router.get("/flights", flightController.getFlightsController);

// Book a flight
router.post("/book", flightController.postBookFlightController);

// Find a flight
router.post("/find", flightController.postFindFlightController);

// Update a flight
router.post("/update", flightController.postUpdateFlightController);

// Delete a flight
router.post("/delete", flightController.postDeleteFlightController);

module.exports = router;
