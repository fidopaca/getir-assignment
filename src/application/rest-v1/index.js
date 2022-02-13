const express = require("express");
const errorHandler = require("./middlewares/error");
const NotFound = require("../../lib/errors/NotFound");

module.exports = (app) => {
  app.use(express.json());

  app.use("/restv1/records", require("./routes/records"));

  app.use("*", (req, res, next) => {
    next(new NotFound(`Can not find ${req.originalUrl} on this server`));
  });

  app.use(errorHandler);
};
