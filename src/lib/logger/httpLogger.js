const appLogger = require("./appLogger");
const morgan = require("morgan");

// define morgan request log definition
const httpLogger = morgan(":method :url :status :res[content-length] - :response-time ms", {
  stream: {
    // pass message to winston to log
    write: (message) => appLogger.http(message.trim()),
  },
});

module.exports = httpLogger;
