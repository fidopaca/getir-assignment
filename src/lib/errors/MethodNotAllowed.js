const BaseError = require("./BaseError")

class MethodNotAllowed extends BaseError{
  constructor(message) {
    super(message, 1);
    this.httpStatus = 405;
  }
}

module.exports = MethodNotAllowed