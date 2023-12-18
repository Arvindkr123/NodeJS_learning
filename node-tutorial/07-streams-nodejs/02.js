const http = require("http");
const { createReadStream } = require("fs");
http
  .createServer((req, res) => {
    const fileStream = createReadStream("./content/big-file.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (error) => {
      res.end(error);
    });
  })
  .listen(4000);
