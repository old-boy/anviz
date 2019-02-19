const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const UserSchema = require('../models/UserSchema');


router.get('',(req,res) => {
    //返回登录成功后的用户信息
    if(req.session.users){
        var users=req.session.users;
        var userName=users.fullName;
        // res.send('你好'+name+'，欢迎来到我的家园。');
    }else{
        res.send('你还没有登录，先登录下再试试！');
        return;
    }
    res.render('index/index',{
        userName:userName
    });
});




module.exports = router;
