const express = require('express')

const {Router} = require('express')
const ClinicRouter = express.Router()

const Clinics = require('../models/clinicModel')

ClinicRouter.get('/id/:ID', (req, res) => {
    Clinics.findById(req.params.ID)
    .then((results) => res.json(results))
    .catch(console.error)
})

ClinicRouter.get('/state/:stateName', (req, res) => {
    Clinics.find({'address.state': req.params.stateName})
    .then((results) => res.json(results))
    .catch(console.error)
})

module.exports = ClinicRouter