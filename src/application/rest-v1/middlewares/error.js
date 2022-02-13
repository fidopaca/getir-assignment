const { ValidationError } = require("joi");
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
  } else if (err instanceof ValidationError) {
    console.log(err);
    msg = `Validation Errors: ${err.message.replace(/\"/g, "")}`;
    code = 3;
    httpStatus = 400;
  } else if (err instanceof SyntaxError) {
    msg = err.message;
    code = 3;
    httpStatus = 400;
  }

  return res.status(httpStatus).json({ code, msg });
};
