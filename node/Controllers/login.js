const express = require('express');
const User = require('../Models/users.js')

module.exports = {
    login : async (req, res) =>  {
      User.findOne(
        {email: req.body.email }, function(err, user) {
          if(err) {
              res.json('Something went wrong');
          }
          if(user){
            if(user.password !== req.body.password) {
              res.status(400);
              res.json('Password Not correct');
            }
            else res.json({msg: 'Successfully Loged In', user})
          }
         else  {
          let user = new User({    
            email: req.body.email,
            password: req.body.password,
          })
          user.save(function(err, user){
            if(err){
                res.json(err);
            } else{
                res.json({msg: 'User Registered', user});
            }
          })
        }
      })
    }
}
