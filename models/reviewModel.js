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