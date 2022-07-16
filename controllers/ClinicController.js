const express = require('express')

const {Router} = require('express')
const ClinicRouter = express.Router()

const Clinics = require('../models/clinicModel')

ClinicRouter.get('/state/:stateName', (req, res) => {
    Clinics.find({'address.state': req.params.stateName})
    .then((results) => res.json(results))
    .catch(console.error)
})

ClinicRouter.get('/test', (req, res) => {
    console.log('test')
})

module.exports = ClinicRouter