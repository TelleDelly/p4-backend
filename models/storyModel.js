const { Schema } = require('mongoose')
const mongoose = require('../db/Connection')

const storySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 160
        },
        body: {
            type: String,
            required: true,
            maxlength: 4000
        },
        user: {
            type: Schema.Types.ObjectId, red: 'User'
        },
    },{
        timestamps: true
    }
)

const Story = mongoose.model('Story', storySchema)
module.exports = Story