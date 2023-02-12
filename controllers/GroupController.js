//Martin Wilson
const express = require('express')
const {Router} = require('express')
const GroupRouter = express.Router()

const Groups = require('../models/GroupModel')
const CustomError = require('../utils/CustomError')

GroupRouter.get('/getAll', async (req, res) => {
    try{
        const response = await Groups.find({})
        res.status(200).json('Group added')
    } catch (err) {
        next(new CustomError('Unable to get groups', 404))
    }
})

GroupRouter.get('/:id/getGroupById', async (req, res, next) => {
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

GroupRouter.put('/:id/edit', async (req, res) => {
    try{
        const isSuccess = await Groups.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(isSuccess)
    } catch (err) {
        next(new CustomError('Groups not updated', 404))
    }
})

GroupRouter.post('/add', async (req,res) => {
    try{
        const isSuccess = await Groups.create(req.body)
        res.send(isSuccess)
    } catch (err) {
        next(new CustomError('Groups not created', 404))
    }
})

GroupRouter.delete('/:id/delete', async (req, res) => {
    try {
        const response = await Groups.findByIdAndRemove(req.params.id)
        res.send(response)
    } catch (err) {
        next(new CustomError(err.message, 404))
    }
})

module.exports = GroupRouter