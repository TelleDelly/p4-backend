const StatePolicy = require('../models/stateModel')
const seedData = require('./stateSeedFile.json')


StatePolicy.deleteMany({})
.then(() => {
    return StatePolicy.insertMany(seedData)
})
.then(console.log('seeded'))
.catch(console.error)
.finally(() => {
    process.exit()
})