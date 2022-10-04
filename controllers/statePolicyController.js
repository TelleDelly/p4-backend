const express = require('express')
const {Router} = require('express')
const statePolicyRouter = express.Router()


const StatePolicy = require('../models/stateModel')
const CustomError = require('../utils/CustomError')

statePolicyRouter.get('/getallstates', async (req, res, next) => {
    try{
        const allPolicies = await StatePolicy.find({})
        res.status.apply(200).json(allPolicies)
    } catch (error) {
        next(new CustomError('Unable to get all states', 400))
    }
})

statePolicyRouter.get('/:stateName', async (req, res) => {
   try{
    const statePolicy = await StatePolicy.findOne({state: req.params.stateName})
    res.json(statePolicy)
    } catch(error){
        next(new CustomError('Unable to get states by name', 400))
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
