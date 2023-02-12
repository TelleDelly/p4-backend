const mongoose = require('mongoose')
require('dotenv').config()

const mongoURI = 
process.env.NODE_ENV === 'production'
? process.env.DB_URL
: process.env.DB_DEV_URL


mongoose.connect(mongoURI)
.then(instance => console.log(`Connected to: ${instance}`))
.catch(console.error)

module.exports = mongoose