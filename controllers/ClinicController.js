const express = require('express')

const {Router} = require('express')
const ClinicRouter = express.Router()

const Clinics = require('../models/reviewModel')

ClinicRouter.get('/:stateName', (res, res) => {
    let stateName = req.params.stateName
    Clinics.find({state: staetName})
    .then((results) => res.json(results))
    .catch(console.error)
})

module.exports = ReviewRouter