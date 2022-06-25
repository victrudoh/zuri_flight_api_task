const FModel = require("../models/Flight");

module.exports = {
  // Get all flights
  getFlightsController: async (req, res) => {
    try {
      console.log("example");
      const flights = await FModel.find();
      // res.send(flights);
      res.status(200).send({
        success: true,
        data: {
          flights: flights,
        },
        message: "fetched flights successfully",
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: "fetched riders successfully",
      });
    }
  },

  //   Book a flight
  postBookFlightController: async (req, res) => {
    try {
      const { title, time, price, date } = req.body;

      const flight = new FModel({
        title,
        time,
        price,
        date,
      });
      await flight.save();

      res.status(200).send({
        success: true,
        data: {
          flight: flight,
        },
        message: "You booked a flight",
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        message: "failed to add flight",
      });
    }
  },

  //   Get a single flight
  postFindFlightController: async (req, res) => {
    try {
      const { flightID } = req.body;

      const foundFlight = await FModel.findById({ _id: flightID });

      //   if no flight
      if (!foundFlight) {
        res.status(400).send({
          success: false,
          message: "Flight not found",
        });
      }

      //   if there's flight
      res.status(200).send({
        success: true,
        data: {
          flight: foundFlight,
        },
        message: "flight found",
      });
    } catch (err) {
      res.status(400).send({
        success: false,
        data: err,
      });
    }
  },
};
