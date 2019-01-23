const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const passport = require('passport');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/',(req,res) => {
      res.render('admin/login',{})
  });
  
  router.get('/forgot',(req,res) => {
      res.render('admin/forgotPsd',{})
  });
  
  router.get('/register',(req,res) => {
      res.render('admin/register',{})
  });

  module.exports = router;