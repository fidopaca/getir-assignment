const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");

const httpLogger = require("./lib/logger/httpLogger");

const app = express();

// log incoming request to console via morgan+winston
app.use(httpLogger);

// enable cors
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit requests from same ip
app.use(
  rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP, please try again in an hour!",
  })
);

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// protect against HTTP Parameter Pollution attacks
app.use(hpp());

// rest api, altough express always return same instance,
// we are passing app insantce
require("./application/rest-v1/index")(app);

// TODO: maybe a graphql application, it will be under /application/graph

module.exports = app;
