var path = require('path');
var express = require('express');
var app = Factory.getApp();
var morgan = require('morgan');
var compression = require('compression');
var nunjucks = require('nunjucks');
// app.set('views', path.join(__dirname, 'views'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  app.disable('view cache');
} else {
  app.use(compression());

}

var appPath={
  "ROOT":app.get("PATH.ROOT")

};
var viewPaths=[
  path.join(appPath.ROOT, 'core/app/user/views'),
  path.join(appPath.ROOT, 'themes/Materialize')
]



// viewPaths.push(path.join((appPath.ROOT, 'api/app/forums/views')));

console.log(viewPaths);



app.set('views',viewPaths );
app.set('view engine', 'html');

nunjucks.configure(viewPaths, {
  autoescape: true,
  express: app,
  noCache: true
});



// app.set('views', views);
