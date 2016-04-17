require('./core/api/services/factory');
require('./global');
var collection=rootRequire('./core/api/helpers/collection').collection();
process.env.NODE_ENV = 'development';

var express = require('express');
var app = Factory.getApp();
// var web = require('./web/app');
var path = require("path");
// console.log(__base);



collection.setCollection('app',app);
// var d=collection.getCollection('appb');
//
//  console.log(d);
//
app.set("PATH.ROOT", __dirname);
// app.use(express.static(path.resolve(__dirname, "public")));

// var helpers=Factory.getService('helpers');
// helpers.Path.root_path=__dirname;
var appRootPath = app.get("PATH.ROOT");

// console.log(Factory.getApp().get("PATH.ROOT"));


// app.use('/',web);
require('./core/config/middleware');
require('./core/config/view')(app);
app=require('./core/config/routes')(app);




app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (process.env.NODE_ENV === 'development') {

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
