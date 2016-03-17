// var usersRoutes=Factory.getRoute('users');
// var forumsRoutes=require('../api/app/forums/routes');
var forumsRoutes=Factory.getRoute('forums');

module.exports=function(app){
  // app.use(usersRoutes);
  app.use(forumsRoutes);
}
