const mongoose = require('mongoose');

replySchema = mongoose.Schema({
    email : {
        type: String,
        required:  true,
    },
    replyContent :{
        type: String,
        required: true,
    },
    blogId :{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
    },
    likes:{
        type: Number,
    },
    unlikes:{
        type: Number,
    }
})

const BlogReply = mongoose.model('reply', replySchema)
module.exports = BlogReply;