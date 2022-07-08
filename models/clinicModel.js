const {Schema} = require('mongoose')
const mongoose = require('../db/Connection')

const clinicSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            reqired: true
        },
        address: {
            city: String,
            state: String,
            zipcode: Number,
            required: true
        },
        latlong: {
            latitude: Number,
            longitude: Number,
            required: true
        },
        email: String,
        phone: {
            type:Number,
            required: true
        },
        website: String,
        socials: {
            Twitter: String,
            Facebook: String,
            Instagram: String,
            Linkedin: String
        },
        hours: {
            type: String
        },
        services: {
            type: String
        },
        picture: String,
        reviews: [{
            type: Schema.Types.ObjectId, ref: 'Review' 
        }],
        ratings: [{
            type: Schema.Types.ObjectId, ref: 'Rating' 
        }]
    }
);

const Clinic = mongoose.model('Clinic', clinicSchema);
module.exports = Clinic;