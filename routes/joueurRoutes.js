const express = require("express");
const router = express.Router();
const controller = require("../Controller/joueurController");

router.post("/newjoueur", controller.addJoueur);
router.get("/getalljoueur", controller.getAllJoueur);
router.get("/getjoueur/:joueurId", controller.getJoueurById);
router.delete("/deletejoueur/:joueurId", controller.deleteJoueurById);
router.put("/attaque/:attaquantId/:victimeId", controller.attaque);
module.exports = router;
