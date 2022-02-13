require("dotenv").config();
const http = require("http");

const app = require("./src/app.js");
const mongoDb = require("./config/mongoDb");

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

async function startServer() {
  await mongoDb.connect();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
