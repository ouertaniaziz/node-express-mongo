const express = require("express");
const router = express.Router();
const controller = require("../Controller/eventsController");
router.get("/", controller.getAllEvent);
router.get("/addForm", function (req, res, next) {
  res.render("form.twig", { title: "ani ghady" });
});
router.post("/add", controller.createEvent);
router.post("/update/:eventId", controller.editEvent);
router.get("/updateForm/:eventId", controller.updateForm);
router.post("/delete/:eventId", controller.deleteEvents);
module.exports = router;
