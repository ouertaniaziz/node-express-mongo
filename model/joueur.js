const mongoose = require("mongoose");

const joueurSchema = new mongoose.Schema({
  pseudo: {
    type: String,
    required: true,
  },

  sante: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const joueur = mongoose.model("joueur", joueurSchema);
module.exports = joueur;
