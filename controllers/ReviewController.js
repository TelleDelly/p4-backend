const express = require('express')
const {Router} =  require('express')
const ReviewRouter = express.Router()

const Reviews = require('../models/reviewModel')

ReviewRouter.get('/getall', (req, res) => {
    Reviews.find({clinic: req.body.clinicId})
    .then(results => res.json(results))
    .catch(console.error)
})

ReviewRouter.get('/getOne/:id',(req, res) => {
    Reviews.findById(req.params.id)
    .then(results => res.json(results))
})

ReviewRouter.get('/getlimit/:limit', (req, res) => {
    Reviews.find({clinic: req.body.clinicId}).limit(req.params.limit)
    .then(results => res.json(results))
    .catch(console.error)
})

module.exports = ReviewRouter