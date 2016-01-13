var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.setHeader('Cache-Control', 'no-cache');
  res.render('index', { title: 'Exffffffffffffffffffpress' });
});

module.exports = router;
