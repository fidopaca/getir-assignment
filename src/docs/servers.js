let server;
const env = process.env.NODE_ENV;
if (env == "production") {
  server = {
    url: "https://getir-assignment-fedaipaca.herokuapp.com/restv1",
    description: "Production Server",
  };
} else {
  const port = process.env.PORT || 8000;
  server = {
    url: `http://localhost:${port}/restv1`,
    description: "Local server",
  };
}

module.exports = {
  servers: [server],
};
