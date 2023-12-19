const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  deletePerson,
  updatePerson,
} = require("../06-controllers/people");

// read data
router.get("/", getPeople);

// create person
router.post("/", createPerson);

// create person postman
router.post("/postman", createPersonPostman);

// Put Method
router.put("/:id", updatePerson);

// delete method
router.delete("/:id", deletePerson);

module.exports = router;
