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
 * GET /cateogory/:id  根据id查询第一级cateogory
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

router.get('/cateogory/:id',(req,res) => {
      const _id = req.params.id;
      console.log('_id          :' + _id)
      CateogoryOneSchema.findOne({
            _id
      }).then(name => {
            res.json(name)
      })
});

router.post('/cateogory/add',urlencodedParser,(req,res) => {
      let errors = [];

      if(!req.body.cateogoryOneName){
      errors.push({text:"请输入名称!"});
      }

      if(!req.body.cateogoryOneDes){
      errors.push({text:"请输入描述!"});
      }

      if(errors.length > 0){
            res.render('/cateogory/add',{
                  cateogoryName: req.body.cateogoryOneName,
                  cateogoryDes:req.body.cateogoryOneDes
            })
      }else{
            const newFields = {
                  cateogoryName: req.body.cateogoryOneName,
                  cateogoryDes:req.body.cateogoryOneDes,
                  userId:req.session.users._id
            }
            CateogoryOneSchema.findOne({cateogoryName:newFields.cateogoryName}).then(cateogoryName => {
                  if(cateogoryName){
                        req.flash("error_msg","数据库中存在相同数据，不可继续添加");
                        res.redirect('/product/cateogory');
                  }else{
                        new CateogoryOneSchema(newFields).save().then(cateogories => {
                              req.flash("success_msg","数据编辑成功!");
                              res.redirect('/product/cateogory');
                        });
                  }
            })
      }
})



module.exports = router;

