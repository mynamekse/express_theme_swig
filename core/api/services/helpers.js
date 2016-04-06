var app = Factory.getApp();
var rootPath = app.get("PATH.ROOT");
module.exports.Path={
  root_path:rootPath
}
module.exports.collectRoute=function(app){
  var routes = fs.readdirSync(app.get('PATH.ROOT') + '/core/modules');
  routes.forEach(function(routeName) {
    var route = Factory.core.getRoute(routeName);
    if (typeof route !=='function'){
      throw new Error('route  '+routeName +' not found ');
    }
    app.use(route);
  });
}
