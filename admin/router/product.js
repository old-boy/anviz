const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const UserSchema = require('../models/UserSchema');

//实例化数据
require('../models/ProductCateogoryOneSchema');
const CateogoryOneSchema = mongoose.model('cateogories');


/**Product Cateogory 
 * GET /cateogory  需要把当前登录的user传过来
 * POST /cateogory/add  添加第一级cateogory
 */
router.get('/cateogory',(req,res) => {
      if(req.session.users){
            CateogoryOneSchema.find().then(cateogories => {
                  console.log('cateogoriesL     :' + cateogories.length)

                  var users=req.session.users;
                  var userName=users.fullName;
                  res.render('product/cateogory',{
                        userName,
                        cateogories
                  });
            })
        }
});

router.post('/cateogory/add',urlencodedParser,(req,res) => {
      const newFields = {
            cateogoryName: req.body.cateogoryOneName,
            cateogoryDes:req.body.cateogoryOneDes
      }
      
      new CateogoryOneSchema(newFields).save().then(cateogories => {
            res.redirect('/product/cateogory');
            res.send(cateogories);
      }).catch(err => {
            console.log(err)
      });
})



module.exports = router;

