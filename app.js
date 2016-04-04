require('./api/services/factory');

var express = require('express');
var app = Factory.getApp();
var web = require('./web/app');
var path = require("path");


process.env.NODE_ENV = 'development';
app.set("PATH.ROOT", __dirname);

// var helpers=Factory.getService('helpers');
// helpers.Path.root_path=__dirname;
var appRootPath = app.get("PATH.ROOT");

// console.log(Factory.getApp().get("PATH.ROOT"));
app.use(express.static(path.join(appRootPath, 'public')));

app.use('/',web);
require('./core/config/middleware');
require('./core/config/view')(app);

require('./core/config/routes')(app);

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
