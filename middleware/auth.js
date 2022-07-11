//Using documentation from http://www.passportjs.org/packages/passport-jwt/

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = 

require('.dotenv').config()

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.ACCESS_TOKEN_ACCESS_TOKEN_SECRET

passport.

