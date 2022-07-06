const express = require('express')
const {Router} = require('express')
const statePolicyRouter = express.Router()

const StatePolicy = require('../models/stateModel')

statePolicyRouter.get('/:stateID', (req, res) => {
    StatePolicy.findById(req.params.stateID)
    .then((policies) => res.send(policies))
    .catch(console.error)
})