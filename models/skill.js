const skills = [
    {id: 1, skill: 'JS', learned: true},
    {id: 2, skill: 'HTML', learned: true},
    {id: 3, skill: 'CSS', learned: true},
    {id: 4, skill: 'C++', learned: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
  }

function create(skill) {
    skill.id = Date.now() & 1000000
    skill.learned = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function updateOne(formData, id) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    skill.skill = formData.skill
    if(formData.learned) {
        skill.learned = true
    } else {
        skill.learned = false
    }
}