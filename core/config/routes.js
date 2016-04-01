// var usersRoutes=Factory.getRoute('users');
// var forumsRoutes=require('../api/app/forums/routes');
// var forumsRoutes=Factory.getRoute('forums');
// var userRoutes=Factory.getRoute('user');
 const userApp=Factory.getSubApp('user');
const forumApp=Factory.getSubApp('forum');

 var path_root=rootPath=Factory.getApp().get("PATH.ROOT");
var url=require('url');
var helper=Factory.getService('helpers',function(err,helper){
  if (err) throw err;

  return 'dddddddd'
});


// console.log(helper);
module.exports=function(app){

  // app.use(usersRoutes);
  // app.use(forumsRoutes);
  // app.use(function(req,res,next){
  //   // console.log('form oute' + req.get('host'));
  //   next();
  // });
app.use(forumApp);
  app.use(userApp);
}
