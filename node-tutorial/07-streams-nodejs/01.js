// STREAMS IN NODE JS
/*
  streams are readable 
  streams are writable
  streams are duplex
  streams are transformed...
*/

// const { writeFileSync } = require("fs");
// for (let i = 1; i < 1000; i++) {
//   writeFileSync("./content/big-file.txt", `hello world ${i}`, { flag: "a" });
// }

const { createReadStream } = require("fs");
const stream = createReadStream("./content/big-file.txt", {
  highWaterMark: 9000,
  encoding: "utf-8",
});
stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => {
  console.log(err);
});
