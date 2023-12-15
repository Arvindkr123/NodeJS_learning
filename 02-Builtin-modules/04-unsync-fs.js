const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      return;
    }
    const second = result;
    writeFile(
      "./content/third.txt",
      `here is result : first: ${first} and second: ${second}`,
      (err, result) => {
        if (err) {
          return;
        }
      }
    );
  });
});
