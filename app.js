const express = require("express");
const path = require("path");
const { products } = require("./data");
const { log } = require("console");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href="/api/products">products</a>`);
  // res.json(products);
});

// sending some data
app.get("/api/products", (req, res) => {
  const newProducts = products.map((p) => {
    const { id, name, image } = p;
    return { id, name, image };
  });
  res.json(newProducts);
});

// sending single data
// app.get("/api/products/1", (req, res) => {
//   const singleData = products.find((p) => p.id === 1);
//   res.json(singleData);
// });

// sending data dynamically
app.get("/api/products/:productId", (req, res) => {
  // log(req.params);
  const { productId } = req.params;
  const singleData = products.find((p) => p.id === +productId);
  res.json(singleData);
});

app.listen(5000, () => {
  console.log(`Server listening on port ${5000}`);
});
