const BaseError = require("../../../lib/errors/BaseError");
const appLogger = require("../../../lib/logger/appLogger");

module.exports = (err, req, res, next) => {
  appLogger.error(err);

  let httpStatus = 500;
  let code = 5;
  let msg = "Oops! Something went wrong. Try again later.";

  if (err instanceof BaseError) {
    msg = err.message;
    code = err.errCode;
    httpStatus = err.httpStatus;
  }

  return res.status(httpStatus).json({ code, msg });
};
