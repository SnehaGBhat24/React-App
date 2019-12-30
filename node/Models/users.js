const mongoose = require('mongoose');

userSchema = mongoose.Schema({
    email : {
        type: String,
        required:  true,
    },
    password : {
       type: String,
       required: true,
    },
    blogsForUser: {
        type: Array,
    },
})

const User = mongoose.model('user', userSchema)
module.exports = User;