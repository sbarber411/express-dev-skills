// const { create } = require("../controllers/skills");

const skills = [
    {id: 41191, skill: 'Front End Design', done: true},
    {id: 50691, skill: 'CSS', done: false },
    {id: 10511, skill: 'Javascript', done: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
	// Find the index based on the id of the todo object
	const idx = skills.findIndex(skill => skill.id === parseInt(id));
	skills.splice(idx, 1);
  }