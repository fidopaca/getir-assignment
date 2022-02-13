const express = require("express");
const router = express.Router();

router.route("/").post((req, res, next) => {
  return res.status(200).json({ code: 0, msg: "Success", records: [] });
});

module.exports = router;
