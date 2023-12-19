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
  if (!singleData) {
    return res.status(404).send("Product does not exist");
  }
  return res.json(singleData);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("<h1>Hello World!!!</h1>");
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  // console.log(req.query);
  console.log(search, limit);
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((p) => p.name.startsWith(search));
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).json("no products match your search....");
    res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log(`Server listening on port ${5000}`);
});
