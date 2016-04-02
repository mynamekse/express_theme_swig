// var usersRoutes=Factory.getRoute('users');
// var forumsRoutes=require('../api/app/forums/routes');
// var forumsRoutes=Factory.core.getRoute('forum');
// var userRoutes=Factory.core.getRoute('user');
var fs = require('fs');
//  const userApp=Factory.getSubApp('user');
// const forumApp=Factory.getSubApp('forum');

var path_root = rootPath = Factory.getApp().get("PATH.ROOT");
var url = require('url');
var helper = Factory.core.getService('helpers', function(err, helper) {
  if (err) throw err;

  return 'dd';
});

// console.log(helper);
module.exports = function(app) {
  var routes = fs.readdirSync(path_root + '/core/modules');
  routes.forEach(function(routeName) {
    var route = Factory.core.getRoute(routeName);
    if (typeof route !=='function'){
      throw new Error('route  '+routeName +' not found ');
    }
    app.use(route);
  });


}
