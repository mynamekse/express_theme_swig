var express = require('express');
var usersApp = express();
var path = require('path');

var nunjucks = require('nunjucks');
var helper = Factory.getService('Helpers');
var usersControlller=require('./controllers/users.js');
var root_path=Factory.getService('helpers').Path.root_path
 var usersApp=require('./config/view')(usersApp);

// var viewPaths=[
//   path.join(root_path, 'themes/Materialize')
// ]
// viewPaths.push(path.join(root_path, 'core/app/user/views'));
// console.log(root_path);
// usersApp.set('views',viewPaths );
// usersApp.set('view engine', 'html');
// //
// nunjucks.configure(viewPaths, {
//   autoescape: true,
//   express: usersApp,
//   noCache: true
// });

// usersApp.use(function(req,res,next){
//
//   next();
// });

usersApp.get('/user',usersControlller.hello);

// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handlers
//
// // development error handler
// // will print stacktrace
//
// if (process.env.NODE_ENV === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
if (process.env.NODE_ENV === 'development') {
  usersApp.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user



module.exports =usersApp;
