const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    await writeFile("./content/five.txt", `${first.toUpperCase()}`);
    const five = await readFile("./content/five.txt", "utf-8");
    console.log(first, five);
  } catch (error) {
    console.log(error.message);
  }
};
start();
