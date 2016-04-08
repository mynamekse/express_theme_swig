var express = require('express');
var web = express();
var nunjucks = require('nunjucks');
var collection = rootRequire('./core/api/helpers/collection').collection();
var userRouter=require('./modules/users/routes');


web.get('/', function(req, res, next) {
  var _data = {
    page_title: 'Front end'
  }

  res.render('static.index.html', {
    data: _data
  });
});

web.get('/ddd', function(req, res, next) {
  var _data = {
    page_title: 'Lddddddddddddddogin'
  }
  var dd = '';

  // res.render('login.hello.html', {
  //   data: _data
  // }, function(err, data) {
  //   processRender(data);
  // });
  // var processRender = function(data) {
    res.render('login.index.html', {
      data: _data
    });
  // }

});
web.use(userRouter);

web.set("PATH.ROOT", __dirname);
require('./config/view')(web);
module.exports = web;
