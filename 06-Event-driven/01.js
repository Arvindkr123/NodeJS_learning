const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`recieved user data : name: ${name} with id: ${id}`);
});

customEmitter.emit("response", "Arvind Kumar", 22);
