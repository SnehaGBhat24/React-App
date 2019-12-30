const mongoose = require('mongoose');

replySchema = mongoose.Schema({
    email : {
        type: String,
        required:  true,
    },
    replyContent :{
        type: String,
        required: true,
    }
    
})

const BlogReply = mongoose.model('reply', replySchema)
module.exports = BlogReply;