const express = require("express");
const errorHandler = require("./middlewares/error");

module.exports = (app) => {
  app.use(express.json());

  app.use("/restv1/records", require("./routes/records"));

  app.use("*", (req, res, next) => {
    next(new Error(`Can not find ${req.originalUrl} on this server`));
  });

  app.use(errorHandler);
};
