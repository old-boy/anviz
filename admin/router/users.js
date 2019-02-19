const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const UserSchema = require('../models/UserSchema');
router.get('/list',(req,res) => {
      if(req.session.users){
            var users=req.session.users;
            var userName=users.fullName;
            UserSchema.find()
                  .then(users => {
                        let d = new Date();
                        let y = d.getFullYear();
                        let m = d.getMonth() + 1;
                        let day = d.getDate();

                        let curDate = y + '-' + m + '-' + day;
                  res.render('users/list',{
                        userName,
                        users,
                        curDate
                  });
                  })
                  .catch(err => {
                        console.log(err)
                  })
      }
});

module.exports = router;