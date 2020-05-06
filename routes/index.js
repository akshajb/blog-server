var express = require('express');
var router = express.Router();
var unsplash = require('../controllers/unsplash')
var localimages = require('../controllers/localimages')
var blog_ctrl = require('../controllers/blog')

router.get('/', function(req, res, next) {
  res.send('Hello from Server')
});

router.get('/getimages-unsplash', unsplash.getimages);


router.get('/getimages/', localimages.getimages);

router.post('/storeimages', localimages.storeimages);


router.post('/addblog', blog_ctrl.addblog);

router.get('/blog/:id', blog_ctrl.getblog);

router.get('/blogs', blog_ctrl.getallblogs);

module.exports = router;
