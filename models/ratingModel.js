const {Schema} = require('mongoose')
const mongoose = require('../db/Connection')

const ratingSchema = new mongoose.Schema(
    {
        rating:{
            type: mongoose.Mixed,
            1: Number,
            2: Number,
            3: Number,
            4: Number,
            5: Number,
            default: {
                1:1,
                2:1,
                3:1,
                4:1,
                5:1
            }
        },
        user: {
            type: Schema.Types.ObjectId, ref: 'User'
        },
        clinic: {
            type: Schema.Types.ObjectId, ref: 'Clinic'
        },
       review: {
            type: Schema.Types.ObjectId, ref: 'Review'
       }
    }
);

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;