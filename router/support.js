const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/',(req,res) => {
    res.render('support/index',{})
});

router.get('/technical',(req,res) => {
    res.render('support/technical',{})
});

router.get('/marketing',(req,res) => {
    res.render('support/marketing',{})
});

router.get('/download',(req,res) => {
    res.render('support/download',{})
})

module.exports = router;