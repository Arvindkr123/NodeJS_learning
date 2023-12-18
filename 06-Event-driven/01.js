// const EventEmitter = require("events");
// // in node js there also events we used haviley them
// // created new event
// const customEmitter = new EventEmitter();

// customEmitter.on("response", (name, id) => {
//   console.log(`recieved user data : name: ${name} with id: ${id}`);
// });

// customEmitter.emit("response", "Arvind Kumar", 22);

// created server with the help of Node js events
const http = require("http");

// Using Event Emitter API
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome");
});

server.listen(4000, () => {
  console.log("Server listening on port : 4000");
});
