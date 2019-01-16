const express = require('express');
const router = express.Router();

/** GET /about
 *  about
*/
router.get('/',(req,res) => {
    res.render('about/index')
});

router.get('/anviz',(req,res) => {
    res.render('about/anviz',{})
});

router.get('/communitySupport',(req,res) => {
    res.render('about/communitySupport',{})
});

router.get('/careers',(req,res) => {
    res.render('about/careers',{})
});

router.get('/innovation',(req,res) => {
    res.render('about/innovation',{})
});

router.get('/technology',(req,res) => {
    res.render('about/technology',{})
});

router.get('/quality',(req,res) => {
    res.render('about/quality',{})
});

router.get('/contact',(req,res) => {
    res.render('about/contact',{})
});

module.exports = router;