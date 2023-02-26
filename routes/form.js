var express = require("express");
var router = express.Router();
var mongosse = require("mongoose");
var Comment = mongosse.model("comments");
/* GET users listing. */
router.get("/", function (req, res, next) {
  comment.find(function (err, comments) {
    console.log(comments);
    res.render("form.twig", { title: "My Form", comments: comments });
  });
});

router.post("/", function (req, res, next) {
  new Comment({ title: req.body.comment }).save(function (err, comment) {
    console.log(comment);
    res.redirect("/form");
  });
});

module.exports = router;
