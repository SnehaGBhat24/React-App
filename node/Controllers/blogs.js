const express = require('express');
const Blog = require('../Models/blogs');
const Reply = require('../Models/reply')

module.exports = {
    addBlog : async (req, res) =>  {
      let imageName = '';
      if(req.file) imageName = req.file.originalname;
      if(req.body.id === 'new' && !req.body.repliesForBlog) {
        let blog = new Blog({    
            email: req.body.email,
            title : req.body.title,
            content : req.body.content,
            blogImage : imageName,
            userId : req.body.userId,
          })
          blog.save(function(err, blog){
            if(err){
                res.json(err);
            } else{
                res.json({msg: 'Blog Posted Successfully', blog});
            }
          })
      }
    },
    getAllBlogs : (req, res) => {
      Blog.find({}, function(err, blogs) {
        if(err){
          res.json(err)
        }
        else {
          res.json(blogs);
        }
      })
    },
    getBlogForId : (req , res) => {
      Blog.findOne({ _id: req.params.id }, function(err, blog){
        if(err){
          res.json(err);
        } else {
          res.json(blog);
        }
      })
    },
    getBlogsForUser : (req, res) => {
      Blog.find({ $or: [
        { email: req.query.email }, 
        { repliesForBlog:{ $elemMatch: {email: req.query.email}}}
      ]}, function(err, blogs) {
        if(err){
          res.json(err);
        } else {
          res.json(blogs);
        }
      })
    },
    addReply : (req, res) => {
      content = req.body.replyObj.content || '';
      replyLikes = req.body.replyObj.likes || 0;
      replyUnlikes = req.body.replyObj.unlikes || 0;

      let repliesForBlog = {
        email: req.body.email,
        blogId: req.body.blogId,
        replyContent : content,
        likes: replyLikes,
        unlikes : replyUnlikes,
      }
      Blog.findOneAndUpdate({ _id: req.body.blogId }, { $push:{ repliesForBlog: repliesForBlog } },function(err, blog){
        if(err){
          res.json(err)
        } else {
          res.json(blog);
        }
      })
    },
    updateLikesOrUnlikes : (req, res) => {
      let incObj = {};
      if(req.body.type === 'likes'){
        incObj["repliesForBlog.$.likes"] = 1;
      } else incObj["repliesForBlog.$.unlikes"] = 1

      Blog.updateOne(
        { _id: req.body.blogId,  
         repliesForBlog: { $elemMatch: { _id:  req.body.id } }},
        { $inc: incObj }, function(err, updatedBlog){
          if(err){
            res.json(err)
          } else {
            res.json(updatedBlog);
          }
         }
        )
    }
}
