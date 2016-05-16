var express = require('express');
var web = express();
var path=require('path');
 // var nunjucks = rootRequire('./app/web/config/view').getNunjucks();
var collection = rootRequire('./core/api/helpers/collection').collection();
var userRouter=require('./modules/user/routes');

web.set("PATH.ROOT", __dirname);

// web.use(function(req, res, next) {
//   req.headers['if-none-match'] = 'no-match-for-this';
//   next();
// });

// web.get('/', function(req, res, next) {
//   var _data = {
//     page_title: 'fff end'
//   }
//
//   var nunjucks=collection.getCollection('nunjucks');
// //   var viewPaths = [
// //     path.join(__base, 'app/web/themes/Materialize'),
// //     // path.join(appPath.ROOT, 'themes/Materialize/user/views'),
// //     path.join(__base, 'app/web/themes/Materialize/modules/login/views'),
// //     path.join(__base, 'app/web/themes/Materialize/modules/static/views')
// //
// //   ]
// //   nunjucks.configure(viewPaths);
// //   var dd=  nunjucks.render('static.index.html', { foo: 'bar' });
// //
// // console.log(dd);
//
//   res.render('static.index.html', {
//     data: _data
//   });
// });
//
// web.get('/ddd', function(req, res, next) {
//   var _data = {
//     page_title: 'Lddddddddddddddogin'
//   }
//   var dd = '';
//
//   // res.render('login.hello.html', {
//   //   data: _data
//   // }, function(err, data) {
//   //   processRender(data);
//   // });
//   // var processRender = function(data) {
//     res.render('login.index.html', {
//       data: _data
//     });
//   // }
//
// });
require('./config/view')(web);
web.use(userRouter);

web.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (process.env.NODE_ENV === 'development') {

  web.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
web.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = web;
