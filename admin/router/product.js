const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });


/**Product Cateogory 
 * index GET /product
 */
router.get('/cateogory',(req,res) => {
      res.render('product/cateogory',{})
});



module.exports = router;

