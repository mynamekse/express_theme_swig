var express = require('express');
var app = express();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  console.log(__dirname);
  res.render('index', { title: 'ssssssssssssssss' });
});

module.exports = router;
