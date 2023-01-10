const skills = [
    {id: 001, skill: 'JS', learned: true},
    {id: 002, skill: 'HTML', learned: true},
    {id: 003, skill: 'CSS', learned: true},
    {id: 004, skill: 'C++', learned: false}
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }