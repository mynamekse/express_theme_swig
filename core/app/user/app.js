var express = require('express');

var app = Factory.getApp();
var usersApp = express(); // the sub app
var nunjucks = require('nunjucks');
var path = require('path');
var usersControlller=require('./controllers/users.js');

var viewPaths=[
  path.join(app.get("PATH.ROOT"), 'themes/Materialize')
]

viewPaths.push(path.join(app.get("PATH.ROOT"), 'core/app/user/views'));

usersApp.set('views',viewPaths );
usersApp.set('view engine', 'html');
//
nunjucks.configure(viewPaths, {
  autoescape: true,
  express: usersApp,
  noCache: true
});

usersApp.use(function(req,res,next){
  console.warn("abcdef");
  next();
});

usersApp.get('/users',usersControlller.hello);

module.exports =usersApp;
