const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/',(req,res) => {
    res.render('whereToBuy/index',{})
})

module.exports = router;