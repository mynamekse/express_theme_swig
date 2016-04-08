var express = require('express');
var web = express();
var nunjucks = require('nunjucks');
var collection = rootRequire('./core/api/helpers/collection').collection();


web.get('/', function(req, res, next) {
  var _data = {
    page_title: 'admin page'
  }

  res.render('static.index.html', {
    data: _data
  });
});

web.get('/login', function(req, res, next) {
  var _data = {
    page_title: 'Login'
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


web.set("PATH.ROOT", __dirname);
require('./config/view')(web);
module.exports = web;
