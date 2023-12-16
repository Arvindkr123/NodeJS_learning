const http = require("http");

// Using Event Emitter API
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(4000, () => {
  console.log("Server listening on port : 4000");
});
