module.exports=function(app){
  require('./frontend')(app);

  app.use(rootRequire('./core/middlewares/notfound'));
}
