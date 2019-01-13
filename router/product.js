const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/',(req,res) => {
    res.render('product/index',{});
});

router.get('/biometric',(req,res) => {
    res.render('product/biometric',{})
});

router.get('/fingerprint',(req,res) => {
    res.render('product/fingerprint',{})
});

router.get('/facial',(req,res) => {
    res.render('product/facial',{})
});

router.get('/iris',(req,res) => {
    res.render('product/iris',{})
});

router.get('/surveillance',(req,res) => {
    res.render('product/surveillance',{})
});

router.get('/camera',(req,res) => {
    res.render('product/camera',{})
});

router.get('/nvr',(req,res) => {
    res.render('product/nvr',{})
});

router.get('/accessories',(req,res) => {
    res.render('product/accessories',{})
});

router.get('/rfid',(req,res) => {
    res.render('product/rfid',{})
});

router.get('/device',(req,res) => {
    res.render('product/device',{})
});

router.get('/controller',(req,res) => {
    res.render('product/controller',{})
});

router.get('/accessories',(req,res) => {
    res.render('product/accessories',{})
})

module.exports = router;