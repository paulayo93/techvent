"use strict";
var express = require("express"),
  logger = require("morgan"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  passport = require("passport"),
  session = require("express-session"),
  path = require("path");

var rootPath = path.normalize(__dirname + "../");

// var rootPath = path.join(__dirname);

module.exports = function(app) {
  // app.use(logger('tiny'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Authorization, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    );
    next();
  });

  app.use(
    session({
      secret: "multi vision unicorns",
      resave: false,
      saveUninitialized: true
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(rootPath));
  app.use(express.static(rootPath + "/../dist/"));
  app.use("/events", express.static(rootPath));
};
