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

module.exports = GroupRouter