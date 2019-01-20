const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const salt = bcrypt.genSaltSync(10); //加密强度
const secretName = require('../../db/config/key').secretName;

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
 * 注册时生成HASH值，并插入数据库
*/
router.post('/register',urlencodedParser,(req,res) => {
    //验证
    
    /*生成HASH值*/
    const newUser = new UserSchema({
        email: req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        hash
    });

    console.log('body:  ' + newUser)

    newUser.save().then((user) => {
        res.redirect('/admin/login');
        res.send(user);
    }).catch((err) => {
        res.render('admin/register',{})
    })
});

/**登录 
 * 登录时验证HASH值，并插入数据库
*/
router.post("/login",urlencodedParser,(req,res,next) => {
    // passport.authenticate('local', {
    //   successRedirect:'/',
    //   failureRedirect: '/admin/login',
    //   failureFlash: true
    // })(req, res, next);
    // // 查询数据库
    UserSchema.findOne({email:req.body.email})
        .then((user) => {
            console.log('user        ' + user)
          if(!user){
            req.flash("error_msg","用户不存在!");
            res.redirect("/admin/login");
            return;
          }
          const param = req.query || req.params;
          const hash = bcrypt.hashSync(req.body.password, salt);
          // 密码验证 hash为后台返回的密码
            if(bcrypt.compareSync(req.body.password, hash)){
                res.send("1");
            }else{
                res.send("0");
            }
        })
  });

module.exports = router;