const express = require('express')
const {Router} = require('express')
const StoryRouter = express.Router()

const Stories = require('../models/storyModel')

StoryRouter.get('/getall', (req, res) => {
    Stories.find({})
    .then((stories) => res.json(stories))
    .catch(console.error)
})

StoryRouter.get('/getById/:storyID', (req,res) => {
    Stories.findById(req.params.storyID)
    .then((story) => res.json(story))
    .catch(console.error)
})

StoryRouter.get('/getlimit/:limit', (req, res) => {
    Stories.find({}).limit(req.params.limit)
    .then((stories) => res.json(stories))
})

module.exports = StoryRouter