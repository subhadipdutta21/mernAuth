const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    first_name :{
        type : String
    },
    last_name :{
        type : String
    },
    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    date :{
        type : Date,
        default : Date.now
    },
})

const Users = mongoose.model('Users', UserSchema)

module.exports = Users

