const winston = require("winston");
const { combine, timestamp, json, printf, errors, cli } = winston.format;

const logLevels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "info";
};

// winston will log to appropriate files based on info value
// error level logs will be logged to /logs/error.log
const errorFilter = winston.format((info, opts) => {
  return info.level === "error" ? info : false;
});
// warning level logs will be logged to /logs/warn.log
const warnFilter = winston.format((info, opts) => {
  return info.level === "warn" ? info : false;
});

// TODO: create a new transport for sending errors via email
const logger = winston.createLogger({
  level: level(),
  levels: logLevels,
  format: combine(timestamp(), errors({ stack: true })),

  transports: [
    new winston.transports.Console({
      format: combine(printf((info) => `[${info.timestamp}] ${info.level}: ${info.stack || info.message}`)),
    }),

    new winston.transports.File({
      filename: "logs/warn.log",
      level: "warn",
      format: combine(warnFilter(), timestamp(), json()),
    }),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
      format: combine(errorFilter(), errors({ stack: true }), timestamp(), json()),
    }),
  ],
});

module.exports = logger;
