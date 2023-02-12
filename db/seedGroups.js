const Group  = require('../models/GroupModel')
const Clinic = require('../models/clinicModel')
const data = require('./GroupSeed.json')

Group.deleteMany({})
.then(() => {
    return Clinic.insertMany(data)
})
.then(console.log('seeded'))
.catch(console.error)
.finally(() => {
    process.exit()
})