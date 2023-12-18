// console.log("Express Toturial");
const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  //   console.log("user hit the server");
  //console.log(res);
  let url = req.url;
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(5000);
