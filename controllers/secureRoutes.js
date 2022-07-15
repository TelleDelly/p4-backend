const express = require('express')
const { Router} = require('express')
const Review = require('../models/reviewModel')
const Story = require('../models/storyModel')

const secureRouter = express.Router()
//Secure GET routes for users

secureRouter.get('/profile', (req, res, next) => {
    res.json({
        message: 'Success',
        user: req.user,
        token: req.query.secret_token
    })
})


secureRouter.post('/postreview', (req, res) => {
    const review = {
        title: req.body.title,
        body: req.body.body,
        rating: req.body.rating,
        user: req.user._id,
        // clinic: req.body.clinic
        //clinic id will come from the front end and will be passed into the form data
    }
    Review.create(review)
    .then(res.send('Creating comment'))
    .catch(console.error)
})

secureRouter.post('/poststory', (req, res) => {
    const story = {
        title: req.body.title,
        body: req.body.body,
        user: req.user._id
    }
    Story.create(story)
    .then(res.send('Creating story'))
    .catch(console.error)
})




module.exports = secureRouter