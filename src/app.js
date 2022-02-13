const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  return res.status(200).json({ msg: "Success" });
});

module.exports = app;