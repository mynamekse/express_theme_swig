// var usersRoutes=Factory.getRoute('users');
// var forumsRoutes=require('../api/app/forums/routes');
// var forumsRoutes=Factory.core.getRoute('forum');
// var userRoutes=Factory.core.getRoute('user');
var fs = require('fs');
var routeHelper=rootRequire('core/lib/helpers/route');
//  const userApp=Factory.getSubApp('user');
// const forumApp=Factory.getSubApp('forum');

var path_root = __base;
var url = require('url');

// console.log(helper);
module.exports = function(app) {
  // var routes = fs.readdirSync(path_root + '/core/modules');
  // routes.forEach(function(routeName) {
  //   var route = Factory.core.getRoute(routeName);
  //   if (typeof route !=='function'){
  //     throw new Error('route  '+routeName +' not found ');
  //   }
  //   app.use(route);
  // });

  routeHelper.collectRoute(app);
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

  return app;

}
