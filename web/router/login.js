const express = require('express');
const router = express.Router();

router.get('/login',(req,res) => {
    res.render('admin/login',{})
});

router.get('/forgot',(req,res) => {
    res.render('admin/forgotPsd',{})
});

router.get('/register',(req,res) => {
    res.render('admin/register',{})
})

module.exports = router;