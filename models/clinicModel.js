const {Schema} = require('mongoose')
const mongoose = require('../db/Connection')

const clinicSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        address: {
            PO: String,
            city: String,
            state: String,
            zipcode: Number,
        },
        latlong: {
            latitude: Number,
            longitude: Number,
        },
        email: String,
        phone: {
            type:Number,
        },
        website: String,
        socials: {
            Twitter: String,
            Facebook: String,
            Instagram: String,
            Linkedin: String
        },
        hours: {
            Monday: String,
            Tuesday: String,
            Wednesday: String,
            Thursday: String,
            Friday: String,
            Saturday: String,
            Sunday: String
        },
        services: [],
        picture: String,
        reviews: [{
            type: Schema.Types.ObjectId, ref: 'Review' 
        }],
    }
);

const Clinic = mongoose.model('Clinic', clinicSchema);
module.exports = Clinic;