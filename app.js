require('./core/api/services/factory');
require('./global');






  process.env.NODE_ENV = 'development';
  var express = require('express');
  var app = express();

  // var d=collection.getCollection('appb');
  //
  //  console.log(d);
  //
  app.set("PATH.ROOT", __dirname);
  // app.use(express.static(path.resolve(__dirname, "public")));

  // var helpers=Factory.getService('helpers');
  // helpers.Path.root_path=__dirname;


  rootRequire('./core/modules/boot')(app);

 module.exports = app;
