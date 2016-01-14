

var routes = require('../routes/index');

module.exports=function(app){

  app.use('/', routes);
}

// app.use('/users', users);
