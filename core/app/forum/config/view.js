var root_path = Factory.getService('helpers').Path.root_path;
var path = require('path');
var nunjucks = require('nunjucks');
module.exports = function(app) {
  var viewPaths = [
    path.join(root_path, 'themes/Materialize')
  ]
  viewPaths.push(path.join(root_path, 'core/app/forum/views'));
  app.set('views', viewPaths);
  app.set('view engine', 'html');
  //
  nunjucks.configure(viewPaths, {
    autoescape: true,
    express: app,
    noCache: true
  });
  return app;
}
