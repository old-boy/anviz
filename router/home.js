const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const HomeSchema = require('../models/HomeSchema');

/** GET /
 *  首页
*/
router.get('/',(req,res) => {
    const title = '这里可以传参';
    res.render('index',{
        title:title
    })
});

/** 
 * 首页添加数据
*/
router.post('/',urlencodedParser,(req,res) => {
    let msg = {};
    if(!req.body.title){
        msg.push({text:'请输入标题！'})
    }
    if(!req.body.des){
        msg.push({text:'请输入详情！！'})
    }

    if(msg.length > 0){
        //msg 错误消息大于0时，停留在 index 页面，这个位置也可以是个路径
        res.render('index',{
            msg:msg,
            title:req.body.title,
            des:req.body.title
        })
    }else{
        //如果没有错误，就将数据保存在数据库并在之后跳转
        const newEntity = {
            title:req.body.title,
            des:req.body.title
        }
        new HomeSchema(newEntity).save().then(data => res.redirect('/prodct'))
    }
})

module.exports = router;