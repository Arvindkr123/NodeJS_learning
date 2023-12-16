// Event loop in Node JS
// console.log("first task");
// setTimeout(() => {
//   console.log("second task");
// }, 0);
// console.log("next task");

// code related to EVENT LOOP
const { readFile } = require("fs");

console.log("started a first task--");
// CHECK PATH----------->
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) return;
  console.log(result);
  console.log("Completed first task.");
});
console.log("starting next task.");
