const {Schema} = require('mongoose')
const mongoose = require('../db/Connection')

const GroupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 180, 
        },
        state: String,
        city: String,
        region: String,
        resources: {
            type: Array,
            required: true
        },
        contactInfo: {
            websiteURL: String,
            phone: String,
            email: String,
            pointOfContact: String,
        },
        misc: String,
        about: {
            type: String,
            maxlength: 800
        },
        summary: {
            type: String,
            maxlength: 1000
        }
    }
)

const Group = mongoose.model('Group', GroupSchema)
module.exports = Group