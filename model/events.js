const mongoose = require("mongoose");

const eventScheema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  NbParticipant: {
    type: Number,
    ref: "Doctor",
    required: true,
  },
});

const event = mongoose.model("event", eventScheema);
module.exports = event;
