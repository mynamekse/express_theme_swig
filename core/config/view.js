var path = require('path');
var express = require('express');
// var app = Factory.getApp();
var morgan = require('morgan');
var compression = require('compression');
var nunjucks = require('nunjucks');
// app.set('views', path.join(__dirname, 'views'));
process.env.NODE_ENV = 'ddd';
var noCache = true;
module.exports = function(app) {


    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
        app.disable('view cache');
        noCache = true;

    } else {

        app.use(compression());
        noCache = false;
    }

    var appPath = {
        "ROOT": app.get("PATH.ROOT")

    };
    var viewPaths = [
        path.join(__base, 'themes/web/Materialize'),
        path.join(__base, 'themes/web/Materialize/modules/user/views'),
        path.join(__base, 'themes/web/Materialize/modules/login/views')

    ]


    // viewPaths.push(path.join((appPath.ROOT, 'api/app/forums/views')));



    app.set('views', viewPaths);
    app.set('view engine', 'html');

    nunjucks.configure(viewPaths, {
        autoescape: true,
        express: app,
        noCache: noCache
    });

}

// app.set('views', views);
