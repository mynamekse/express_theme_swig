var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {

  // res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify({ a: 1 }));
  //  res.render(path.join(__dirname, 'index.jade'),{ title: 'User Router' });
   //
  //     res.send(__dirname);

  //  app.set('views', path.join(__dirname));
  // app.set('views', path.join(__dirname, 'views'));
   res.render('views/index_user', { title: 'User Router' });
});

module.exports = router;
