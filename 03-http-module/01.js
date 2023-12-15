const http = require("http");
// console.log(http);

// const server = http.createServer((req, res) => {
//   res.write("Welcome to the Home Page!!!");
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the Home Page");
  }

  if (req.url === "/about") {
    res.end("Welcome to the About Page");
  }

  res.end(`
        <h1>Oops</h1>
        <p>We can't find the page you are looking for</p>
        <a href="/">back home</a>
    `);
});

server.listen(3000);
