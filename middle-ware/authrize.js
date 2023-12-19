const authrize = (req, res, next) => {
  const { user } = req.query;
  if (user === "arvind") {
    req.user = { name: "Arvind Kumar", id: 1 };
    next();
  } else {
    return res.status(401).send("Unauthorized");
  }
};
module.exports = authrize;
