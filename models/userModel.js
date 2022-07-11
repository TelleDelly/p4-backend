const {Schema} = require('mongoose')
const mongoose = require('../db/Connection')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            maxlength: 20
        },
        password: {
            type: String,
            required: true,
            minlength:8
        },
        isSuper: {
            type: Boolean,
            default: false
        },
        timestamp: true
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;