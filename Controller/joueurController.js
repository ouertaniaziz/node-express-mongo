const mongoose = require("mongoose");
const joueur = require("../model/joueur");
const addJoueur = async (req, res) => {
  const { pseudo } = req.body;

  try {
    const newJoueur = new joueur({
      pseudo: pseudo,
      sante: 100,
      score: 0,
    });
    await newJoueur.save();
    res.status(201).json("le joueur a été ajouté avec succés : " + pseudo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new joueur!" });
  }
};

const getAllJoueur = async (req, res) => {
  try {
    const joueurs = await joueur.find();

    res.status(201).json({ joueurs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch joueurs!" });
  }
};
const getJoueurById = async (req, res) => {
  const { joueurId } = req.params;

  try {
    const j = await joueur.findById(joueurId);

    res.status(201).json({ j });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch joueurs!" });
  }
};
const deleteJoueurById = async (req, res) => {
  const { joueurId } = req.params;

  try {
    const j = await joueur.findByIdAndDelete(joueurId);

    res.status(201).json("le joueur est effacé");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch joueurs!" });
  }
};
const attaque = async (req, res) => {
  const { attaquantId, victimeId } = req.params;

  try {
    const attaq = await joueur.findById(attaquantId);
    const victi = await joueur.findById(victimeId);
    const attanquant = await joueur.findOneAndUpdate(
      { _id: attaquantId },
      {
        $set: {
          score: attaq.score + 10,
        },
      },

      {
        new: true,
      }
    );
    const victime = await joueur.findById(
      { _id: victimeId },
      {
        $set: {
          sante: victi.sante - 20,
        },
      },

      {
        new: true,
      }
    );

    res.status(201).json("le joueur est effacé");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch joueurs!" });
  }
};
module.exports = {
  addJoueur,
  getAllJoueur,
  getJoueurById,
  deleteJoueurById,
  attaque,
};
