const express = require('express')

const {Router} = require('express')
const ClinicRouter = express.Router()

const Clinics = require('../models/clinicModel')

ClinicRouter.get('/id/:ID', async (req, res) => {
    try{
        const clinic = await Clinics.findById(req.params.ID)
        res.json(clinic)
    } 
    catch(error){
        console.error
    }
    
})

ClinicRouter.get('/state/:stateName', async (req, res) => {
    try{
        const clinics = await Clinics.find({'address.state': req.params.stateName})
    res.json(clinics)
    }
    catch(error){
        console.error
    }
})

module.exports = ClinicRouter