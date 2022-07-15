const express = require('express')
const { Router} = require('express')
const Review = require('../models/reviewModel')
const Story = require('../models/storyModel')

const secureRouter = express.Router()
//Secure GET routes for users

//!!! Used for checking profiles will not be included in production!!!
// **!!** NOT FOR PRODUCTION **!!**
// secureRouter.get('/profile', (req, res, next) => {
//     res.json({
//         message: 'Success',
//         user: req.user,
//         token: req.query.secret_token
//     })
// })

// REVIEW ROUTES //
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


// STORY ROUTES //

//Create Route
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

//Update Route
secureRouter.put('/editstory', (req, res) => {
    Story.findOneAndUpdate({_id: req.body._id, user: req.user._id}, req.body, {new: true})
    .then((result) => {
        if(result === null){
            res.send('Unathorized')
        }
        if(result){
            res.send('updated')
        }
    })
    .catch(console.error)
})

//Delete Route
secureRouter.delete('/deletestory', (req, res) => {
    Story.findOneAndDelete({_id: req.body._id, user: req.user._id})
    .then(result => {
        if(result){
            res.send('deleted')
        } else {
            res.send('not deleted')
        }
    })
    .catch(console.error)
})




module.exports = secureRouter