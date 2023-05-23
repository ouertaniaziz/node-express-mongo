const mongoose = require("mongoose");
const joueur = require("../model/joueur");
const partie = require("../model/partie");

const addPartie = async (req, res) => {
  const { nom, id1, id2 } = req.body;

  try {
    const newPartie = new partie({
      nom: nom,
      joueur_1: id1,
      joueur_2: id2,
      status: "en cours",
    });
    await newPartie.save();
    res.status(201).json("la partie est ajoutée avec succees : " + nom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new joueur!" });
  }
};

module.exports = {
  addPartie,
};
