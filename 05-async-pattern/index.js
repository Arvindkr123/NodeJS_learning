const { readFile } = require("fs");

// readFile("./content/first.txt", "utf8", (err, results) => {
//   if (err) {
//     return;
//   } else {
//     console.log(results);
//   }
// });

// now do it async pattern way
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText("./content/first.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// do it using async and await
const start = async () => {
  try {
    const result = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    const third = await getText("./content/third.txt");
    console.log(result);
    console.log(second);
    console.log(third);
  } catch (error) {
    throw new Error(error.message);
  }
};

start();
