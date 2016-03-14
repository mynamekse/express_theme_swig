var usersRoutes=require('../app/users/routes');
var forumsRoutes=require('../app/forums/routes');

module.exports=function(app){
  app.use('/',usersRoutes);
  app.use('/',forumsRoutes);
}
