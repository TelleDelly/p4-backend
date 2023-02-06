const express = require('express')
const GroupRouter = express.Router()

const Groups = require('../models/GroupModel')
const CustomError = require('../utils/CustomError')

GroupRouter.get('/getGroup/:id', async (req, res, next) => {
    try{
        const group = await Groups.findById(req.params.id)
        res.status(200).json(group)
    } catch(err) {
        next(new CustomError('Group not found', 404))
    }
})

GroupRouter.get('/getGroupsByState/:name', async (req, res, next) => {
    try {
        const groups = await Groups.find({'areaOfOperation.state.stateName': req.params.name})
        res.status(200).json(groups)
    } catch(err) {
        next(new CustomError('Groups not found', 404))
    }
})

module.exports = GroupRouter