const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middle-ware/logger");
app.use('/api',logger);

app.get("/", (req, res) => {
  res.send("Welcome to Home page!");
});
app.get("/about", (req, res) => {
  res.send("Welcome to About page!");
});
app.get("/api/products", (req, res) => {
  res.send("Welcome to Products page!");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000..");
});
