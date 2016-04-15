var path = require('path');
var express = require('express');
// var app = Factory.getApp();
var morgan = require('morgan');
var compression = require('compression');
var nunjucks = require('nunjucks');
// app.set('views', path.join(__dirname, 'views'));

module.exports = function(app) {


  if (process.env.NODE_ENV === 'development') {

    app.use(morgan('dev'));
    app.disable('view cache');

  } else {

    app.use(compression());

  }
  app.use(express.static(path.join(__base, 'public')));
  var appPath = {
    "ROOT": __base

  };

  var themes = {
    'materialize': [
      '/core/themes/materialize',
      '/core/themes/materialize/layout',
      '/core/themes/materialize/user/views',
      '/core/themes/materialize/login/views'
    ],
    'webbootstrap': ['/core/themes/webbootstrap', '/core/themes/webbootstrap/layouts']
  }
  var viewPaths = []

  themes.materialize.forEach(function(entry) {
    viewPaths.push(path.join(appPath.ROOT, entry));
  });




  // viewPaths.push(path.join((appPath.ROOT, 'api/app/forums/views')));



  app.set('views', viewPaths);
  app.set('view engine', 'html');

  nunjucks.configure(viewPaths, {
    autoescape: true,
    express: app,
    noCache: true
  });

}

// app.set('views', views);
