class BaseError extends Error {
  constructor(message, errCode, ...params) {
    super(message, ...params);

    this.errCode = errCode;
    this.isOperational = true;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = BaseError;
