require('./api/services/factory');
require('./global');
var collection=rootRequire('./core/api/helpers/collection').collection();
var path = require("path");
var http = require('http');
var express = require('express');
var app = Factory.getApp();
process.env.NODE_ENV ='production';
// var web = require('./app/web');


// var admin =require('./app/admin')


collection.setCollection('app',app);
// var d=collection.getCollection('appb');
//
//  console.log(d);


app.set("PATH.ROOT", __dirname);

// var helpers=Factory.getService('helpers');
// helpers.Path.root_path=__dirname;
var appRootPath = app.get("PATH.ROOT");

// console.log(Factory.getApp().get("PATH.ROOT"));
app.use(express.static(path.join(appRootPath, 'public')));

require('./core/config/middleware');
require('./core/config/view')(app);
// app.use('/',web);
app.get('/hello',function(req,res){
  var _data = {
      page_title: 'adddddddddddbcd',
      b2: Date.now()
  }

  res.render('login.index.html', {
      data: _data
  });
});
// app.use('/admin',admin);

// require('./core/config/routes')(app);

// require('./config/middleware');
// console.log(path.join(__dirname, 'views'));

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;
