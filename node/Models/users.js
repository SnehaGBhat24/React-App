const mongoose = require('mongoose');
const blogs = require('../Models/blogs');
const blogSchema = require('mongoose').model('reply').schema;

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
        type: [blogSchema],
    },
})

const User = mongoose.model('user', userSchema)
module.exports = User;