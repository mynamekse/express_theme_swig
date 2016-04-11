var fs = require('fs');

module.exports.collectRoute=function(app){
  var routes = fs.readdirSync(app.get('PATH.ROOT') + '/core/modules');
  routes.forEach(function(routeName) {
    var route = Factory.core.getRoute(routeName);
    if (typeof route !=='function'){
      throw new Error('route  '+routeName +' not found ');
    }
    app.use(route);
  });
 var routes = fs.readdirSync(app.get('PATH.ROOT') + '/modules');

  routes.forEach(function(routeName) {

    var route = rootRequire('./modules/'+routeName+"/routes");
    if (typeof route !=='function'){
      throw new Error('route  '+routeName +' not found ');
    }
    app.use(route);
  });
}
