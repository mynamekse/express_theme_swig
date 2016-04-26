module.exports=function(app){
  rootRequire('./core/config/middleware');
  rootRequire('./core/config/view')(app);
  rootRequire('./core/config/routes')(app);
  
  var collection = rootRequire('./core/api/helpers/collection').collection();
  collection.setCollection('app', app);
  if (process.env.NODE_ENV === 'development') {
      app.use(function(err, req, res, next) {
          res.status(err.status || 500);
          res.render('error', {
              message: err.message,
              error: err
          });
      });
  }

  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: {}
      });
  });
}
