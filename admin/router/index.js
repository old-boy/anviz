const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const UserSchema = require('../models/UserSchema');

router.get('',(req,res) => {
    res.render('index/index',{});

    //返回登录成功后的用户信息
    let sess = req.session;
    console.log(`session id is: ${sess.id}`)
    console.log("Cookies: ", req.cookies)
});



module.exports = router;
