const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('',(req,res) => {
    res.render('index/index',{})
});



module.exports = router;
