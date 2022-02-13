const express = require("express");
const router = express.Router();

const record = require("../../middlewares/record");

router.route("/").post(record.getRecords);

module.exports = router;
