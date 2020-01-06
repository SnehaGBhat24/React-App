const express = require('express');
const User = require('../Models/users.js')

module.exports = {
    login : async (req, res) =>  {
      if(!req.body.email){
        res.status(400);
        res.json('Email Cannot be empty');
        return;
      }
      User.findOne(
        {email: req.body.email }, function(err, user) {
          if(err) {
              res.status(400);
              res.json('Something went wrong');
              return;
          }
          if(user){
            if(user.password !== req.body.password) {
              res.status(400);
              res.json('Password Not correct');
              return
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
    },
    update: async(req, res) => {
      User.findOneAndUpdate({ email:req.body.email }, { $set : { password: req.body.newPassword }}, function(err, updatedUser){
        if(err){
          res.json(err);
          return;
        } else {
          res.json(updatedUser)
        }
      })
    }
}
