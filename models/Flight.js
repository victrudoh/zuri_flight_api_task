// Dependencies
const mongoose = require("mongoose");

// Stuff
const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    time: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    price: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      default: "",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
