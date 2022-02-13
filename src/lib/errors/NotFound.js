const BaseError = require("./BaseError");

class NotFound extends BaseError {
  constructor(message) {
    super(message, 2);
    this.httpStatus = 404;
  }
}

module.exports = NotFound;
