("use strict");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect("mongodb://localhost:27017/myexam2023", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"));
module.exports = mongoose;
