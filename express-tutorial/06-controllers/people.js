let { people } = require("../../data");

// get people
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

// create person
const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a name" });
  }
  res.status(201).json({ success: true, person: name });
};

// create person postman
const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a name" });
  }
  res
    .status(201)
    .json({ success: true, data: [...people, { id: Date.now(), name: name }] });
};

// create person put method
const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((p) => p.id === Number(id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.filter((p) => p.id !== +person.id);
  res.status(202).json({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  deletePerson,
  updatePerson,
};
