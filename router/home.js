const express = require('express');
const router = express.Router();

/** GET /
 *  首页
*/
router.get('/',(req,res) => {
    const title = '这里可以传参';
    res.render('index',{
        title:title
    })
});

module.exports = router;