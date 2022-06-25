const express = require("express");

const router = express.Router();
const flightController = require("../controllers/flightController");

router.get("/flights", flightController.getFlightsController);
router.post("/book", flightController.postBookFlightController);
router.post("/find", flightController.postFindFlightController);

module.exports = router;
