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
  res.status(201).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a name" });
  }
  res
    .status(201)
    .json({ success: true, data: [...people, { id: Date.now(), name: name }] });
});

// Put Method
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((p) => p.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with this ${id}` });
  }
  const newPeople = people.map((p) => {
    if (p.id === Number(id)) {
      p.name = name;
    }
    return p;
  });
  res.status(202).json({ success: true, data: newPeople });
});

// delete method
app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((p) => p.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.filter((p) => p.id !== +person.id);
  res.status(202).json({ success: true, data: newPeople });
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
