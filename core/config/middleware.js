var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

 var app=Factory.getApp()

// console.log(path.join(app.get("ROOT.PATH"), 'public'));

// var session = require('express-session');
// var RedisStore = require('connect-redis')(session);


// app.use(session({
//   store: new RedisStore(options),
//   secret: 'Pro Express.js rocks!'
// }));




app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
var userApp = rootRequire('core/app/user');

// function addApp(req,res,next) {
//   console.log('dd'+ Date.now());
//
//   app.use(userApp);
//   next();
// }


app.use(userApp);

// module.exports.set
