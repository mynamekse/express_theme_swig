
require('./api/services/factory');
var config=getConfig('d1');
var express = require('express');
var app=null;
config('d1',function(){
   app = require('./api/factory').get('app');
});

config('d2',function(){
   app = Factory.getApp();
});
// require('./api/services/factory');
// var app = Factory.getApp();
// console.log(appb);
// var express=require('express');



var path=require("path");


process.env.NODE_ENV='development';
app.set("ROOT.PATH",__dirname);
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');







require('./config/middleware');
require('./config/views');
require('./config/routes')(app);
app.use(express.static(path.join(app.get("ROOT.PATH"), 'public')));
// require('./config/middleware');
// console.log(path.join(__dirname, 'views'));

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace

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
