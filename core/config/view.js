 // require('../../global');
 var path = require('path');
 var express = require('express');
 // var app = Factory.getApp();
 var morgan = require('morgan');
 var compression = require('compression');
 var nunjucks = require('nunjucks');
 // app.set('views', path.join(__dirname, 'views'));

 module.exports = function(app) {



     if (process.env.NODE_ENV === 'development') {
         app.use(morgan('dev'));
         app.disable('view cache');
     } else {
         app.use(compression());
     }

     var appPath = {
         "ROOT": __base,

     };

     app.use(express.static(path.resolve(__base, "public")));
     var themes = {
         'webmaterialize': [
             '/core/themes/webmaterialize',
             '/core/themes/webmaterialize/layouts',
             '/core/themes/webmaterialize/user/views',
             '/core/themes/webmaterialize/login/views'
         ],
         'webbootstrap': ['/core/themes/webbootstrap', '/core/themes/webbootstrap/layouts'],
         'webmaterialdst': [
             '/core/themes/webmaterialdst',
             '/core/themes/webmaterialdst/layouts',
             // '/core/themes/webmaterialdst/user/views',
             // '/core/themes/webmaterialdst/login/views'
         ],
     }
     var viewPaths = []

     themes.webmaterialize.forEach(function(entry) {
         viewPaths.push(path.join(appPath.ROOT, entry));
     });

     // viewPaths.push(path.join((appPath.ROOT, 'api/app/forums/views')))
     app.set('views', viewPaths);
     app.set('view engine', 'html');

     nunjucks.configure(viewPaths, {
         autoescape: true,
         express: app,
         noCache: true
     });

 }

 // app.set('views', views);
