const Clinic = require('../models/clinicModel')
const clinicData = require('./clinicSeedFile.json')

Clinic.deleteMany({})
.then(() => {
    return Clinic.insertMany(clinicData)
})
.then(console.log('seeded'))
.catch(console.error)
.finally(() => {
    process.exit()
});