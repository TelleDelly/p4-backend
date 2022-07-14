const express = require('express')
const { Router} = require('express')

const userGet = express.Router()
//Secure GET routes for users

userGet.get('/profile', (req, res, next) => {
    console.log(req.user)
    // res.json({
    //     message: 'Success',
    //     user: req.user,
    //     token: req.query.secret_token
    // })
})

module.exports = userGet