const mongoose = require('mongoose');
const BlogReply = require('../Models/reply');
const replySchema = require('mongoose').model('reply').schema;

blogSchema = mongoose.Schema({
    email : {
        type: String,
        required:  true,
    },
    title : {
       type: String,
       required: true,
    },
    content: {
        type: String,
        required: true,
    },
    blogImage :{
        type: Buffer,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required : true,
    },
    repliesForBlog :{
        type: [replySchema],
    }
})

const Blog = mongoose.model('blog', blogSchema)
module.exports = Blog;