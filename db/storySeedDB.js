const Story = require('../models/storyModel')
const storyData = require('./storySeedFile.json')

Story.deleteMany({})
.then(() => {
    return Story.insertMany(storyData)
})
.then(console.log('seeded'))
.catch(console.error)
.finally(() => {
    process.exit()
});