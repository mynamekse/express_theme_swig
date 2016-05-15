var path = require('path');
var express = require('express');
// var app = Factory.getApp();
var collection = rootRequire('./core/api/helpers/collection').collection();
var morgan = require('morgan');
var compression = require('compression');
var nunjucks = require('nunjucks');
// app.set('views', path.join(__dirname, 'views'));
process.env.NODE_ENV='development';
module.exports = function(app) {


  if (process.env.NODE_ENV === 'development') {

    app.use(morgan('dev'));
    app.disable('view cache');

  } else {

    app.use(compression());

  }

  var appPath = {
    "ROOT": app.get("PATH.ROOT")

  };
  // var viewPaths = [
  //   path.join(appPath.ROOT, 'themes/Materialize'),
  //   // path.join(appPath.ROOT, 'themes/Materialize/user/views'),
  //   path.join(appPath.ROOT, 'themes/Materialize/modules/login/views'),
  //   path.join(appPath.ROOT, 'themes/Materialize/modules/static/views')
  //
  // ]

  var viewPaths = [
    path.join(appPath.ROOT, 'themes/materialize'),
    path.join(appPath.ROOT, 'themes/materialize/layouts'),
    // path.join(appPath.ROOT, 'themes/Materialize/user/views'),
    path.join(appPath.ROOT, 'themes/materialize/modules/user/views'),
    // path.join(appPath.ROOT, 'themes/materialize/modules/static/views')

  ]
console.log(viewPaths);

  // viewPaths.push(path.join((appPath.ROOT, 'api/app/forums/views')));



  app.set('views', viewPaths);
  app.set('view engine', 'html');

  nunjucks.configure(viewPaths, {
    autoescape: true,
    express: app,
    noCache: true
  });


  // var nunjucks=collection.getCollection('nunjucks');
  // var dd=  nunjucks.render('static.index.html', { foo: 'bar' });
  // console.log(dd);
  collection.setCollection('nunjucks', nunjucks);

}

module.exports.getNunjucks = function() {

  console.log("dddddddddddddddddddddddddddddddd" + i);
  return "dd";
}

// app.set('views', views);
