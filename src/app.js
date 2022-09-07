'use strict';

const express = require("express");
const fileupload = require("express-fileupload");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ValidationError } = require("express-validation");
require("dotenv").config();
const routes = require('./api/routes')
const passport = require("passport");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(fileupload());
app.use(morgan("dev"));
app.use(cors());
app.use(passport.initialize());
app.use('/api', routes);
app.use('/', (req, res) => {
  res.statusCode = 200
  res.json(({
    success: true,
    message: "😎😘Hurray we are connected 🚀🚀"
  }))
  console.log();
});

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    if (err.details && err.details.body && err.details.body.length && err.details.body[0].message) {
      return res.status(err.statusCode).json({
        success: false,
        message: err.details.body[0].message.replace(/"/g, ""),
      });
    } else {
      return res.status(err.statusCode).json({
        success: false,
        message: err.message,
        response: err,
      });
    }
  }

  return res.status(500).json(err);
});

module.exports = app;