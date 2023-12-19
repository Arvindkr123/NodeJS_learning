const express = require("express");
const app = express();

let peopleRouter = require("./express-tutorial/05-routes/people");
let loginRouter = require("./express-tutorial/05-routes/auth");

app.use(express.static("./express-tutorial/04-methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/people", peopleRouter);
app.use("/login", loginRouter);

app.listen(5000, () => {
  console.log("listening on port 5000.......");
});
