const express = require("express");
const router = express.Router();
const controller = require("../Controller/partieController");
router.post("/newpartie", controller.addPartie);

module.exports = router;
