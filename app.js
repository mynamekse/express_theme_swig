require('./core/api/services/factory');
require('./global');
var collection=rootRequire('./core/api/helpers/collection').collection();
process.env.NODE_ENV = 'development';

var express = require('express');
var app = Factory.getApp();
// var web = require('./web/app');
var path = require("path");
// console.log(__base);



collection.setCollection('app',app);
// var d=collection.getCollection('appb');
//
//  console.log(d);
//
app.set("PATH.ROOT", __dirname);

// var helpers=Factory.getService('helpers');
// helpers.Path.root_path=__dirname;
var appRootPath = app.get("PATH.ROOT");

// console.log(Factory.getApp().get("PATH.ROOT"));


// app.use('/',web);
require('./core/config/middleware');
require('./core/config/view')(app);
app=require('./core/config/routes')(app);




module.exports = app;
