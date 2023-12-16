const { readFile, writeFile } = require("fs");
const util = require("util");

// do promise thing with the help of util

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");
    await writeFilePromise(
      "./content/fout.txt",
      `This is Awesome : ${first} ${second}`
    );
    const four = await readFilePromise("./content/fout.txt", "utf8");
    console.log(first, second, four);
  } catch (error) {
    throw new Error(error.message);
  }
};
start();
