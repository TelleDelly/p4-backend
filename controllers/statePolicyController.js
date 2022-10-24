const express = require('express')
const {Router} = require('express')
const statePolicyRouter = express.Router()

const StatePolicy = require('../models/stateModel')

statePolicyRouter.get('/getallstates', async (req, res) => {
    try{
        const allPolicies = await StatePolicy.find({})
        res.json(allPolicies)
    } catch (error) {
        console.error;
    }
})

statePolicyRouter.get('/:stateName', async (req, res) => {
   try{
    const statePolicy = await StatePolicy.findOne({state: req.params.stateName})
    res.json(statePolicy)
    } catch(error){
    console.error;
   }    
})

// Not working in localtest 
// statePolicyRouter.get('/id/:stateID', async (req, res) => {
//     try{
//         const statePolicy = await StatePolicy.findById(req.params.stateID)
//         res.json(statePolicy)
//     } catch(error){
//         console.error;
//     }   
// })


module.exports = statePolicyRouter
