const express = require("express");
const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  // console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("please provie the credentials");
});

module.exports = loginRouter;
