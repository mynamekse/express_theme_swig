// var usersRoutes=Factory.getRoute('users');
// var forumsRoutes=require('../api/app/forums/routes');
// var forumsRoutes=Factory.core.getRoute('forum');
// var userRoutes=Factory.core.getRoute('user');
var fs = require('fs');
var routeHelper=rootRequire('core/lib/helpers/route');
//  const userApp=Factory.getSubApp('user');
// const forumApp=Factory.getSubApp('forum');

// var path_root = __base;
// var url = require('url');

// console.log(helper);
module.exports = function(app) {
  app.get('/',function(req,res){
    res.render('home');
  });

  // app.get('/login',function(req,res){
  //   res.render('home');
  // });


}
