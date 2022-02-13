require("dotenv").config();
const http = require("http");

const app = require("./src/app.js");
const mongoDb = require("./config/mongoDb");
const appLogger = require("./src/lib/logger/appLogger");

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

async function startServer() {
  await mongoDb.connect();
  server.listen(PORT, () => {
    appLogger.info(`Listening on port ${PORT}`);
  });
}

startServer();

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down.");
  appLogger.error(err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down.");
  appLogger.error(err);
  server.close(() => {
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  appLogger.error("SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("Process terminated!");
  });
});
