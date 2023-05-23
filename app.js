var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var eventRoute = require("./routes/eventRoutes");
var joueurRoutes = require("./routes/joueurRoutes");
var partieRoutes = require("./routes/partieRoutes");

var db = require("./database/database.js");
var http = require("http");
var app = express();
const { Server } = require("socket.io");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/event", eventRoute);
app.use("/user", joueurRoutes);
app.use("/partie", partieRoutes);

//partie socket
const server = http.createServer(app);
global.io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
  socket.on("notification", (data) => {
    console.log(data);
    socket.broadcast.emit("recive", data);
  });
  socket.on("delete", (data) => {
    console.log(data);
    socket.broadcast.emit("recive", data);
  });
});
server.listen(3000, () => console.log("server socket is run "));

module.exports = app;
