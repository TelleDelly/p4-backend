const express = require('express')

const {Router} = require('express')
const ClinicRouter = express.Router()

const Clinics = require('../models/reviewModel')

ClinicRouter.get('/:stateName', (req, res) => {
    Clinics.find({state: req.params.stateName})
    .then((results) => res.json(results))
    .catch(console.error)
})

module.exports = ClinicRouter