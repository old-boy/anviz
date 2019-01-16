const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/',(req,res) => {
    res.render('industry/index',{})
});

router.get('/homeSecurity',(req,res) => {
    res.render('industry/homeSecurity',{})
});

router.get('/communitySecurity',(req,res) => {
    res.render('industry/communitySecurity',{})
});

router.get('/government',(req,res) => {
    res.render('industry/government',{})
});

router.get('/financial',(req,res) => {
    res.render('industry/financial',{})
});

router.get('/transportation',(req,res) => {
    res.render('industry/transportation',{})
});

router.get('/healthcare',(req,res) => {
    res.render('industry/healthcare',{})
});

router.get('/education',(req,res) => {
    res.render('industry/education',{})
});

router.get('/infrastructure',(req,res) => {
    res.render('industry/infrastructure',{})
});

router.get('/commercial',(req,res) => {
    res.render('industry/commercial',{})
});

router.get('/retail',(req,res) => {
    res.render('industry/retail',{})
});

router.get('/shopping',(req,res) => {
    res.render('industry/shopping',{})
});

router.get('/hospitality',(req,res) => {
    res.render('industry/hospitality',{})
})

module.exports = router;