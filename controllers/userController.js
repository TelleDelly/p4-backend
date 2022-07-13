const express = require('express')
const {Router} = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
require('dotenv').config()
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

userRouter.post('/login',
    async (req, res, next) => {
        // console.log(req)
        passport.authenticate('login', async (err, user, info) => {
            console.log(user)
            try{
                // console.log(`user ${user} err${err} info`, info)
                if(err ||!user){
                    // console.log(err)
                    const error = new Error('an error ocurred')
                    return next(error)
                }
                req.login(
                    user,
                    {session: false},
                    async(error =>{
                        console.log('creatiing token')
                        if(error) return next(error)

                        const body = { _id: user._id, username: user.username}
                        const token = jwt.sign({user: body}, process.env.ACCESS_TOKEN_SECRET)

                        return res.json({token})
                    })
                )
            } catch(error){
                // console.log(error)
                return next(error)
            }
        })(req, res, next)
    }
    
)

module.exports = userRouter