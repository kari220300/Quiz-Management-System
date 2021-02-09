"use strict";

let express = require("express");
let path = require("path");

let logger = require("morgan");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");

let routes = require("./routes/index");
let users = require("./routes/users");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);
//app.use('/', login);
app.use("/users", users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.listen(8000,function(err){
  console.log("server is up and running");
})

module.exports = app;
