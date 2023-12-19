const express = require("express");
const path = require("path");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href="/api/products">products</a>`);
  // res.json(products);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((p) => {
    const { id, name, image } = p;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.listen(5000, () => {
  console.log(`Server listening on port ${5000}`);
});
