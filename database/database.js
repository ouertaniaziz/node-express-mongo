("use strict");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected"));
module.exports = mongoose;
