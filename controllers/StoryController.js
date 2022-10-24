const express = require('express')
const {Router} = require('express')
const StoryRouter = express.Router()

const Stories = require('../models/storyModel')

StoryRouter.get('/getall', async (req, res) => {
    try {
        const stories = await Stories.find({})
        res.json(stories)
    } catch(error) {
        console.error
    }
})

StoryRouter.get('/getById/:storyID', async (req,res) => {
    try{
        const story = await Stories.findById(req.params.storyID)
        res.json(story)
    } catch(error) {
        console.error
    }
})

StoryRouter.get('/getlimit/:limit', async (req, res) => {
    try{
        const stories = await Stories.find({}).limit(req.params.limit)
        res.json(stories)
    } catch(error) {
        console.error
    }
})

module.exports = StoryRouter