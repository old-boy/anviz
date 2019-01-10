const express = require('express');
const router = express.Router();

/**GET
 * 
 * home
 * about
 */

router.get('/',(req,res) => {
    const title = '这里可以传参';
    res.render('index',{
        title:title
    })
});

router.get('/about',(req,res) => {
    res.render('about')
});