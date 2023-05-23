const mongoose = require("mongoose");

const partieSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  joueur_1: {
    type: String,
    required: true,
  },
  joueur_2: {
    type: String,
    required: true,
  },
  etat: {
    type: String,
    required: true,
  },
});

const partie = mongoose.model("partie", partieSchema);
module.exports = partie;
