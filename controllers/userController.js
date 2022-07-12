const express = require('express')
const {Router} = require('express')
const passport = require('passport')
const userRouter = express.Router()

userRouter.post('/signup', 
    passport.authenticate('signup', {session: false}),
    async (req, res, next) => {
        res.json({
            message: 'Signup successful',
            user: req.user
        })
    }
)

module.exports = userRouter