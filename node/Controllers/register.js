const express = require('express');
const User = require('../Models/users')
// const upload = require('./addImage')

module.exports = {
    registerUser : (req, res) =>  {
        User.findOne({ email: req.body.email }, function(err, email) {
            if(err) {
                console.log(err)
                res.json(err)
            }
            else if (email) {
                 res.status(400);
                 res.json('Email Already exists');
            } else {
                let user = new User({    
                    email: req.body.email,
                    password: req.body.password,
                    profile:imagePath
               })
                user.save(function(err, user){
                   if(err){
                      res.json(err);
                   } else{
                       res.json({msg: 'User Registered', user});
                   }
               })
            }
         }); 
    }
}