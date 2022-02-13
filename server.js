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
    appLogger.info(`Listening on port ${PORT}...`);
  });
}

startServer();
