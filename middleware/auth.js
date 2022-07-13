//Using documentation from http://www.passportjs.org/packages/passport-jwt/
//and help from guide: https://www.digitalocean.com/community/tutorials/api-authentication-with-json-web-tokensjwt-and-passport#step-1-setting-up-the-project


const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const localStrategy = require('passport-local').Strategy
const UserModel = require('../models/userModel')
const passport = require('passport')
require('dotenv').config()

passport.use('signup', new localStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },
    async (username, password, done) => {
        try{
            console.log('signup')
            const user = await UserModel.create({username: username,password: password})
            return done(null, user)
        } catch(error){
            done(error)
        }
    }
))

passport.use(
    'login',
    new localStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        secretOrKey: process.env.ACCESS_TOKEN_SECRET,
    },
    async (username, password, done) => {
        try{
            // console.log(`pass: ${password} user:`, username)
            const user = await UserModel.findOne({username: username})

            if(!user) {
                return done(null, false, {message: 'User not found'})
            }

            const validate = await user.isValidPass(password)

            if(!validate){
                return done(null, false, {message: 'Wrong Pasasword'})
            }
            return done(null, user, { message: 'Logged in successfully'})
        } catch (error) {
            return done(error)
        }
    }
    ))

passport.use(
    new JwtStrategy(
        {
            secretOrKey: process.env.ACCESS_TOKEN_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() 
        },
        async (token, done) => {
            try{
                return done(null, token.user)
            } catch(error){
                done(error)
            }
        }
    )
)

