

var router = require('express').Router();
var path = require('path');
/* GET users listing. */


router.get('/forums', function(req, res, next) {

  // res.setHeader('Content-Type', 'application/json');
    // res.send(JSON.stringify({ a: 1 }));
  //  res.render(path.join(__dirname, 'index.jade'),{ title: 'User Router' });
   //
  //     res.send(__dirname);

  //  app.set('views', path.join(__dirname));
  // app.set('views', path.join(__dirname, 'views'));


   res.render('index.forums.html',{time:new Date()});
});

var forumsCtr=require('./controllers/forum.js');
// var forumsCtr=Factory.getController('forum','test');
router.get('/forum',forumsCtr.renderIndex);

module.exports = router;
