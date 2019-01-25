const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require('passport');
const salt = bcrypt.genSaltSync(10); //加密强度

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const UserSchema = require('../models/UserSchema');

router.get('/',(req,res) => {
      res.render('admin/login',{})
  });
  
  router.get('/forgot',(req,res) => {
      res.render('admin/forgot',{})
  });
  
  router.get('/register',(req,res) => {
      res.render('admin/register',{})
  });

  /**POST users
   * 登录 POST /
   * 注册 POST /register
  */

router.post('/register',urlencodedParser,(req,res) => {
    const entity = req.body;
    const userEntity = UserSchema(entity);

    console.log('newUser      ' + userEntity)
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(userEntity.password, salt, (err, hash) => {
            if(err) throw err;
            
            userEntity.password = hash;

            //保存到数据库
            userEntity.save().then((user) => {
                console.log(user)
                res.redirect('/admin/');
                res.send(user);
            }).catch((err) => {
                res.render('/admin/register',{})
            })
        });
    });
});

  module.exports = router;