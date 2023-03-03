//Martin Wilson
const express = require('express')
const {Router} = require('express')
const GroupRouter = express.Router()

const Groups = require('../models/GroupModel')
const CustomError = require('../utils/CustomError')
const logger = require('../utils/logger')

GroupRouter.get('/', async (req, res, next) => {
    const {search, limit} = req.query
    const limitNum = parseInt(limit)
    let groups;

    if(search) {
        groups = await Groups.aggregate([
            {
              '$search': {
                'index': 'groupByName',
                compound: {
                  should: [
                    {'autocomplete': {
                      'query': search, 
                      'path': "name"
                    }},
                    {'autocomplete': {
                      'query': search,
                      'path': "state"
                    }},
                    {'autocomplete' : {
                      'query': search,
                      'path': 'city'
                    }},
                    {'autocomplete': {
                      'query': search,
                      'path': 'region'
                    }}
                  ]
                }
                
                
              }
            }, {
              '$limit': limitNum
            }, {
              '$project': {
                '_id': 1, 
                'name': 1,
                'summary': 1,
                'resources': 1,
                'state': 1,
                'city': 1
              }
            }
          ]
        )
    } else {
        groups = []
    }

    return res.status(200).json({
        statusCode: 200,
        message: 'Fetched Groups',
        data: { groups },
    })
})

GroupRouter.get('/access/getByType', async (req, res, next) => {
  try {
    const groups = await Groups.find({'access': true})
    return res.status(200).json({
      statusCode: 200,
      message: 'Fetched Groups',
      data: { groups },
  })
  } catch (err) {
    next(new CustomError('Unable to get groups', 404))
  }
})

GroupRouter.get('/funds/getByType', async (req, res, next) => {
  try{
    const groups = await Groups.find({'funds': true})
    return res.status(200).json({
      statusCode: 200,
      message: 'Fetched Groups',
      data: { groups },
  })
  } catch (error) {
    next(new CustomError('Unable to get groups', 404))
  }
})

GroupRouter.get('/policy/getByType', async (req, res, next) => {
  try{
    const groups = await Groups.find({'policy': true})
    return res.status(200).json({
      statusCode: 200,
      message: 'Fetched Groups',
      data: { groups }
    })
  } catch (err) {
    next(new CustomError('Unable to get groups', 404))
  }
})

GroupRouter.get('/searchGroups', async (req, res, next) => {
    const {search} = req.query
    let groups;
    if(search) {
        groups = await Groups.aggregate([
            {
              '$search': {
                'index': 'groupByName', 
                'autocomplete': {
                  'query': search, 
                  'path': 'name'
                }
              }
            }, {
              '$limit': 25
            }, {
              '$project': {
                '_id': 1, 
                'name': 1,
                'summary': 1,
                'resources': 1
              }
            }
          ]
        )
    } else {
        groups = []
    }

    return res.status(200).json({
        statusCode: 200,
        message: 'Fetched Groups',
        data: { groups },
    })
})

GroupRouter.get('/getAll', async (req, res) => {
    try{
        const response = await Groups.find({})
        res.status(200).json({
          statusCode: 200,
          message: 'Fetched Groups',
          data: {response}
        })
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
        console.log(err)
    }
})

GroupRouter.post('/add', async (req,res, next) => {
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