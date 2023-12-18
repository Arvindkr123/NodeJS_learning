const fs = require("fs");
// console.log(fs);

// reading the file
const first_file = fs.readFileSync("./content/first.txt", "utf8");
// console.log(first_file);

fs.writeFileSync(
  "./content/akshita.text",
  `I am writing text to other file ${first_file}`,
  {flag:'a'}
);
