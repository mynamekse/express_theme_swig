var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.setHeader('Cache-Control', 'no-cache');
    // app.set('views',app_root);
    // console.log(app.root);
  // res.render('static/add', { title: 'Express' });

  res.send('dddddddd');
});

module.exports = router;
