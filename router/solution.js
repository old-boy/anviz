const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/',(req,res) => {
    res.render('solution/index',{})
});

router.get('/crossChex',(req,res) => {
    res.render('solution/crossChex',{})
});

router.get('/securityONE',(req,res) => {
    res.render('solution/securityONE',{})
});

router.get('/intelliSight',(req,res) => {
    res.render('solution/intelliSight',{})
})

module.exports = router;