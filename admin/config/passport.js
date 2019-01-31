const LocalStrategy  = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const flash = require("connect-flash");
const jwt = require('jsonwebtoken');
const secretName = require('../../db/config/key').secretName;

// Load user model
const UserSchema = require('../models/UserSchema');


module.exports = function(passport){
  passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
    console.log('获取的字段：' + email+'/'+ password)
    // Match user
    UserSchema.findOne({
      email:email
    }).then(users => {
      console.log('user存在吗？' + users)
      if(!users){
        return done(null, false, {message: 'No User Found'});
      } 

      // Match password
      bcrypt.compare(password, users.password, (err, isMatch) => {
        console.log('password = user.password ' + password === users.password);
        if(err) throw err;
        if(isMatch){
          console.log('isMatch   ' + isMatch)

          const rule = {
            id: users._id,
            name:users.userName,
            password:users.password
          };

          jwt.sign(rule,secretName,{expiresIn:3600},(err,token) => {
              if(err) throw err;
              res.json({
                  sucess:true,
                  token:"Bearer " + token
              });
          })

          return done(null, users);
        } else {
          return done(null, false, {message: 'Password 无效'});
        }
      })
    })
  }));

  passport.serializeUser(function(users, done) {
    done(null, users.id);
  });
  
  passport.deserializeUser(function(id, done) {
    UserSchema.findById(id, function(err, users) {
      done(err, users);
    });
  });
}