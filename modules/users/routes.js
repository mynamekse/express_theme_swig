var express = require('express');
var app = express();
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // app.set('views', __dirname);
  console.log(__dirname);
  res.render('index', { title: 'ssssssssssssssss' });
});

module.exports = router;
