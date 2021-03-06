var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./modules/users/routes');
// var test= require('./config/test');
// require('./config/test.js')();


// view engine setup


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());



 var swig = require('swig');
// app.engine('html', swig.renderFile);
//
// app.set('view engine', 'html');
// app.set('view cache', false);
// // To disable Swig's cache, do the following:
// swig.setDefaults({
//   cache: false
// });
// //
//
//  app.disable('view cache');
var config_theme = require("./config/theme");
config_theme.setApp(app);
config_theme.addPath(path.join(__dirname, 'hello'));
// config_theme.addPath(path.join(__dirname, 'modules/users'));
config_theme.setEngine(swig);
config_theme.end();


// var config = new Config(app,mypath);

// require("./config/theme")(app,path.join(__dirname, 'modules/users'));

// app.set('view engine', 'jade');
// var myhello="hello";
// module.exports.hello='ddddddddd'
// app.set('views', path.join(__dirname, 'vapp.disable('etag');iews'));
app.use('/', routes);
app.use('/users', users);
// app.set('views', path.join(__dirname, 'modules/users'));





app.use(express.static(path.join(__dirname, 'public')));

// app.disable('view cache');

// app.set('views', path.join(__dirname, 'modules/users'));
// var config = require('./config/
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
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
