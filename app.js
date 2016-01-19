var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


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
// var config_theme = require("./config/theme");
var views_path=path.join(__dirname, 'views')
// require("./config/theme")({'app':app,'views_path':views_path});
// require("./config/routes")(app);

app.use(express.static(path.join(__dirname, 'public')));


var nunjucks=require('nunjucks');
// var express   = require('express');
//     config.app.set('view engine', 'nunjucks');
// config.app.engine('html', nunjucks.renderFile);
//     config.app.set('views',config.views_path)

nunjucks.configure('themes/normal/static', {
autoescape: true,
express: app
});

app.get('/', function(req, res) {
  res.render(__dirname+'/themes/normal/static/index.html', {
    title : 'My First Nunjucks Page',
    items : [
      { name : 'item #1' },
      { name : 'item #2' },
      { name : 'item #3' },
      { name : 'item #4' },
    ]
  });
});



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
