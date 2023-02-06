const {Schema} = require('mongoose')
const mongoose = require('../db/Connection')

const GroupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 180, 
        },
        areaOfOperation: {
            city: {
                cityName: String,
                cityRegion: String,
            },
            state: {
                stateName: String,
                stateRegion: String,
            },
            region: {
                regionName: String,
                cities: Array,
                states: Array
            }
        },
        resourceType: {
            type: Array,
            required: true
        },
        contactInfo: {
            websiteURL: URL,
            phone: String,
            email: String,
            socialMedia: Array,
            pointOfContact: String,
        },
        outreach:{
            type: Array
        },
        connections: {
            type: Array
        },
        services: {
            type: Array
        },
        misc: {
            type: Array
        },
        about: {
            type: String,
            required: true,
            maxlength: 800
        },
        shortSummary: {
            type: String,
            required: true,
            maxlength: 1000
        }
    }
)

const Group = mongoose.model('Group', GroupSchema)
module.exports = Group