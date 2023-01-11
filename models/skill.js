const skills = [
    {id: 1, skill: 'JS', learned: true},
    {id: 2, skill: 'HTML', learned: true},
    {id: 3, skill: 'CSS', learned: true},
    {id: 4, skill: 'C++', learned: false}
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