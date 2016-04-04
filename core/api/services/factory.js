var fs = require('fs');
var express = require('express');

Factory = function Factory() {};
var app = express();
Factory.getApp = function() {
  return app;
}

// Factory.getEnv={};
// Factory.getEnv.rootPath=Factory.getApp().get("PATH.ROOT");


Factory.core = {
  getService : function(name, callback) {
    var helper = require('./' + name); // Do something
    var err = '';
    if (!helper) {
      err = new Error("helper not defined");
    }
    if (!callback) {
      return helper;
    }
    return callback(err, helper);
  },
  getRoute: function(name) {
    try {
      var routes = require(app.get("PATH.ROOT") + "/core/modules/" + name + "/routes");
      return routes;
    } catch (e) {
      throw new Error(e);
    }
  }
};




Factory.getSubApp = function(name) {
  var root_path = Factory.getService('helpers').Path.root_path;
  var path_app = root_path + "/core/app/" + name + '/app';
  // console.log(path_app);
  var routes = require(path_app);
  return routes;

};

Factory.getController = function(appName, controllerName) {
  try {
    var controller = require(app.get("PATH.ROOT")+'/modules/' + appName + '/controllers/' + controllerName);
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
