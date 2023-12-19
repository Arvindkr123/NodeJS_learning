const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./express-tutorial/04-methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// read data
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a name" });
  }
  res.status(201).json({success:true, person:name})
});

app.post("/login", (req, res) => {
  // console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("please provie the credentials");
});

app.listen(5000, () => {
  console.log("listening on port 5000.......");
});
