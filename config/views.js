var path = require('path');
var express = require('express');
var app = require('../api/factory').createApp();
var morgan = require('morgan');
var compression = require('compression');
var nunjucks = require('nunjucks');
// app.set('views', path.join(__dirname, 'views'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  app.disable('view cache');
} else {
  app.use(compression());

}

var viewPaths=[
  path.join(app.get("ROOT.PATH"), 'themes/Materialize')
]

viewPaths.push(path.join(app.get("ROOT.PATH"), 'api/app/forums/views'));
viewPaths.push(path.join(app.get("ROOT.PATH"), 'api/app/users/views'));





app.set('views',viewPaths );
app.set('view engine', 'html');

nunjucks.configure(viewPaths, {
  autoescape: true,
  express: app,
  noCache: true
});



// app.set('views', views);
