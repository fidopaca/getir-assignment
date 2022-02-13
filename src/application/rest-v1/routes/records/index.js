const express = require("express");
const router = express.Router();

const MethodNotAllowed = require("../../../../lib/errors/MethodNotAllowed");
const record = require("../../middlewares/record");

router.route("/").post(record.getRecords);

router.use("*", (req, res, next) => {
  next(new MethodNotAllowed(`${req.method} method is not allowed.`));
});

module.exports = router;
