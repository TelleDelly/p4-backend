const {Schema} = require('mongoose')
const mongoose = require('../db/Connection')
const bcrypt = require('bcrypt')

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
    }, {
        timestamp: true
    }
);



userSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10, (error, hash) => {
        if(error){
            return next(error)
        } else {
            this.password = hash
            next()
        }
    })
    // bcrypt.hash(this.username, 10, (error, hash) => {
    //     if(error){
    //         return next(error)
    //     } else {
    //         this.username = hash
    //         next()
    //     }
    // })
})


//These methods are untested at the moment and currently I have them set as async functions referencing the schema
//with this. I am a bit skeptical of using this in an arrow function becuase it might be the same issue with
//the .pre function where this was grabbing an the instance of creation rather the schema/object itself. Please take note 
userSchema.methods.isValidPass = async (password) => {
    const user=this;
    const compare = await bcrypt.compare(password, user.password)

    return compare
}

userSchema.methods.isValidUser = async (username) => {
    const user = this;
    const compare = await bcrypt.compare(username, user.username)
}
const User = mongoose.model('User', userSchema);

module.exports = User;