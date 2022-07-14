const {Schema} = require('mongoose')
const mongoose = require('../db/Connection')

const reviewSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 140,
        },
        body:{
            type: String,
            maxlength: 700
        },
        rating: {
            type: Number,
            min: 1,
            max: 5
        },
        user: {
            type: Schema.Types.ObjectId, ref: 'User'
        },
        clinic: {
            type: Schema.Types.ObjectId, ref: 'Clinic'
        },
        
    }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;