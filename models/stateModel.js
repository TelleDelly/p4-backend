const {Schema} = require('mongoose')
const mongoose = require('../db/Connection')

const StatePolicySchema = new mongoose.Schema({
    state: {
        type: String,
        required: true,
    },
    gestational_limits:{
        type: {}
    },
    waiting_periods: {
        type: {}
    },
    minors: {
        type: {}
    },
    insurance_coverage: {
        type: {}
    }
})

const StatePolicy = mongoose.model('StatePolicy', StatePolicySchema)

module.exports = StatePolicy