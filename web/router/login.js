const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

require('../models/AdminSchema');
const AdminSchema = mongoose.model('users');//实例化

router.get('/login',(req,res) => {
    res.render('admin/login',{})
});

router.get('/forgot',(req,res) => {
    res.render('admin/forgotPsd',{})
});

router.get('/register',(req,res) => {
    res.render('admin/register',{})
});


router.post('/register',urlencodedParser,(req,res) => {
    
    const newUser = new AdminSchema({
        email: req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        firstName:req.body.firstName,
        lastName:req.body.lastName
    });

    console.log('body:  ' + newUser)

    newUser.save().then((user) => {
        res.redirect('/admin/login')
    }).catch((err) => {
        res.render('admin/register',{})
    })
})

module.exports = router;