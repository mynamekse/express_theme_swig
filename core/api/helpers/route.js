var fs = require('fs');

module.exports.collectRoute=function(app){
    console.log(app);
  var routes = fs.readdirSync(app.get('PATH.ROOT') + '/core/modules');

  routes.forEach(function(routeName) {
    console.log(routeName);
    var route = Factory.core.getRoute(routeName);
    if (typeof route !=='function'){
      throw new Error('route  '+routeName +' not found ');
    }

  });

  var routes = fs.readdirSync(app.get('PATH.ROOT') + '/core/modules');
  routes.forEach(function(routeName) {

    var route = Factory.core.getRoute(routeName);
    if (typeof route !=='function'){
      throw new Error('route  '+routeName +' not found ');
    }
    app.use(route);
  });
}
