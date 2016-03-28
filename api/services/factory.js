// Factory={
//   getApp:function(){
//       return app;
//   }
// }
Factory = function Factory() {

}
var express = require('express');
var app = express();
var rootPath = app.get("PATH.ROOT");

Factory.getApp = function() {
  return app;
}

// Factory.getEnv={};
// Factory.getEnv.rootPath=Factory.getApp().get("PATH.ROOT");



Factory.getRoute = function(name) {
  try {
    var routes = require(app.get("PATH.ROOT") + "/core/app/" + name);
    return routes;
  } catch (e) {
    throw new Error(e);
  }
};

Factory.getSubApp = function(name) {
  try {
    var routes = require(app.get("PATH.ROOT") + "/core/app/" + name + '/app');
    return routes;
  } catch (e) {
    throw new Error(e);
  }
};

Factory.getController = function(appName, controllerName) {
  try {
    var controller = require('../app/' + appName + '/controllers/' + controllerName);
    return controller;
  } catch (e) {
    throw new Error(e);
  }
}



getConfig = function getConfig(env) {
  var env1 = env;
  return function(env2, callback) {
    if (env1 == env2) {
      callback();
    }
  }
}
