const {Schema} = require('mongoose')
const mongoose = require('../db/Connection')

const StatePolicySchema = new mongoose.Schema({
    state: {
        type: String,
        required: true,
    },
    gestational_limit:{
        type: {}
    },
    waiting_period: {
        type: {}
    },
    laws_for_minors: {
        type: {}
    },
    insurance_coverage: {
        type: {}
    }
})

const StatePolicy = mongoose.model('StatePolicy', StatePolicySchema)

module.exports = StatePolicy