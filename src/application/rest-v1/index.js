const express = require("express");
const swaggerUI = require("swagger-ui-express");

const errorHandler = require("./middlewares/error");
const NotFound = require("../../lib/errors/NotFound");
const docs = require("../../docs");

module.exports = (app) => {
  app.use(express.json());

  // dont combine these under app.use("/"), otherwise other routes wont work
  app.use("/", swaggerUI.serve);
  app.get("/", swaggerUI.setup(docs));

  app.use("/restv1/records", require("./routes/records"));

  app.use("*", (req, res, next) => {
    next(new NotFound(`Can not find ${req.originalUrl} on this server`));
  });

  app.use(errorHandler);
};
