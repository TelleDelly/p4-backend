const express = require('express')
const {Router} = require('express')
const statePolicyRouter = express.Router()

const StatePolicy = require('../models/stateModel')

statePolicyRouter.get('/getallstates', (req, res) => {
    StatePolicy.find({})
    .then((policies) => res.send(policies))
    .catch(console.error)
})

statePolicyRouter.get('/:stateID', (req, res) => {
    StatePolicy.findById(req.params.stateID)
    .then((policies) => res.send(policies))
    .catch(console.error)
})

statePolicyRouter.get('/:stateName', (req, res) => {
    StatePolicy.find({state: req.params.stateName})
    .then((policies) => res.send(policies))
    .catch(console.error)
})

module.exports = statePolicyRouter
