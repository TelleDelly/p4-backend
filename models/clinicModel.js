const {Schema} = require('mongoose')
const mongoose = require('../db/Connection')

const clinicSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            reqired: true
        },
        address: {
            PO: String,
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
            Monday: String,
            Tuesday: String,
            Wednesday: String,
            Thursday: String,
            Friday: String,
            Saturday: String,
            Sunday: String
        },
        services: {
            Abortion: {
                Medication: String,
                Surgical: String,
            },
            Birth_Control: String,
        },
        picture: String,
        reviews: [{
            type: Schema.Types.ObjectId, ref: 'Review' 
        }],
    }
);

const Clinic = mongoose.model('Clinic', clinicSchema);
module.exports = Clinic;