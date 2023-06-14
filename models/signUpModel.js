const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        firstName : {
            type:String,
            required:true
        },
        lastName : {
            type:String,
            required:true
        },
        email : {
            type:String,
            required:true,
            unique:true
        },
        password : {
            type:String,
            required:true
        },
    },
    {
        collection : 'users'
    }
)
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;