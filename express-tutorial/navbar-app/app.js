// console.log("Express Toturial");
const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./express-tutorial/navbar-app/index.html");
const homeStyles = readFileSync("./express-tutorial/navbar-app/style.css");
const homeLogo = readFileSync("./express-tutorial/navbar-app/logo.svg");
const homeLogic = readFileSync("./express-tutorial/navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  //   console.log("user hit the server");
  //console.log(res);
  let url = req.url;

  // Home page
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homePage);
    res.end();
  }
  // Styles
  else if (url === "/style.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });
    res.write(homeStyles);
    res.end();
  }

  // logo
  else if (url === "/logo.svg") {
    res.writeHead(200, {
      "content-type": "image/svg+xml",
    });
    res.write(homeLogo);
    res.end();
  }

  // logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, {
      "content-type": "text/javascript",
    });
    res.write(homeLogic);
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
