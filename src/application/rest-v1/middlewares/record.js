// TODO: injecting controllers to some context object can prevent from requires...
const RecordController = require("../../../business/controllers/record/index");

async function getRecords(req, res, next) {
  // Starting with Express 5, route handlers and middleware that return a Promise
  // will call next(value) automatically when they reject or throw an error.
  // So it will be possible to remove try-catch block if dont need.
  // https://expressjs.com/en/guide/error-handling.html
  try {
    const records = await RecordController.getRecords(req.body);
    return res.status(200).json({ code: 0, msg: "Success", records: records });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getRecords,
};
