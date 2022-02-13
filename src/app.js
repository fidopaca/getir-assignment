const express = require("express");

const app = express();

// rest api, altough express always return same instance,
// we are passing app insantce
require("./application/rest-v1/index")(app);

// TODO: maybe a graphql application, it will be under /application/graph

module.exports = app;
