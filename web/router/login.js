const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require('passport');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const salt = bcrypt.genSaltSync(10); //加密强度
const secretName = require('../../db/config/key').secretName;

// Passport Config
// require('../config/')(passport);

//Schema
require('../models/UserSchema');
const UserSchema = mongoose.model('users');//实例化


router.get('/login',(req,res) => {
    res.render('admin/login',{})
});

router.get('/forgot',(req,res) => {
    res.render('admin/forgotPsd',{})
});

router.get('/register',(req,res) => {
    res.render('admin/register',{})
});

/**注册提交 
*/
router.post('/register',urlencodedParser,(req,res) => {
    //验证
    
    const newUser = new UserSchema({
        email: req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    });

    console.log('body:  ' + newUser)

    //给 newUser.password 加密,hash 为加密后的密码
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            
            newUser.password = hash;

            //保存到数据库
            newUser.save().then((user) => {
                res.redirect('/admin/login');
                res.send(user);
            }).catch((err) => {
                res.render('/admin/register',{})
            })
        });
    });
});

/**登录 
*/
router.post("/login",urlencodedParser,(req,res,next) => {
    const loginUser = {
        email:req.body.email,
        password:req.body.password
    };

    console.log(loginUser);
    passport.authenticate('local', {
      successRedirect:'/',
      failureRedirect: '/admin/login',
      failureFlash: true
    })(req, res, next);

    // UserSchema.findOne({
    //     email:loginUser.email
    //   }).then(users => {
    //     console.log('user存在吗？' + users)
    //     if(!users){
    //       return done(null, false, {message: 'No User Found'});
    //     } 
    //     //验证密码
    //     bcrypt.compare(loginUser.password, users.password, (err, isMatch) => {
    //       if(err) throw err;
    //       if(isMatch){
    //         res.redirect('/')
    //       } else {
    //         res.redirect('/admin/login')
    //       }
    //     })
    //   })
  });

module.exports = router;