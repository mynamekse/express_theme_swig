// Factory={
//   getApp:function(){
//       return app;
//   }
// }
Factory = function Factory() {

}

Factory.getApp = function() {
  var express = require('express');
  var app = express();
  return app;
}



Factory.getRoute = function(name) {
  try {
    var routes = require('../app/' + name + '/routes');
    return routes;
  } catch (e) {
    throw new Error(e);
  }
};

Factory.getController=function(appName,controllerName){
  try {
    var controller = require('../app/' + appName + '/controllers/'+controllerName);
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
