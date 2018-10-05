var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'Home'});
});

router.get('/maps', function(req, res, next) {
  res.render('maps', { title: 'Maps' });
});

router.get('/streamingmaps', function(req, res, next) {
  res.render('streamingmaps', { title: 'Streaming Maps' });
});



module.exports = router;
