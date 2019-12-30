const express = require('express');
const Blog = require('../Models/blogs')

module.exports = {
    addBlog : async (req, res) =>  {
      console.log('req.body', req.body);
      if(req.body.id === 'new' && !req.body.repliesForBlog) {
        let blog = new Blog({    
            email: req.body.email,
            title : req.body.title,
            content : req.body.content,
            blogImage : req.body.file || '',
            userId : req.body.userId,
          })
          blog.save(function(err, user){
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
      console.log('reqqqqqqqqqqq', req.query);
      Blog.find({ email: req.query.email, userId : req.query.userId }, function(err, blogs) {
        if(err){
          res.json(err)
        }
        else {
          res.json(blogs);
        }
      })
    }
}
