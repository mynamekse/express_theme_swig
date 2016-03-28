var express = require('express');

var app = Factory.getApp();
var forum = express(); // the sub app
var nunjucks = require('nunjucks');
var path = require('path');
var forumControlller=require('./controllers/forumController.js');

var viewPaths=[
  path.join(app.get("PATH.ROOT"), 'themes/Materialize')
]

viewPaths.push(path.join(app.get("PATH.ROOT"), 'core/app/user/views'));

forum.set('views',viewPaths );
forum.set('view engine', 'html');
//
nunjucks.configure(viewPaths, {
  autoescape: true,
  express: forum,
  noCache: true
});

forum.get('/forum',forumControlller.renderIndex);

module.exports =forum;
