"use strict";
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');


class Middleware {
  constructor(option) {
    this.app=option.app;

  }
  apply() {
    let app=this.app;
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use('/public',express.static(path.join(__root_path, 'public')));
  }
}

module.exports = function(app){
  return new Middleware({app:app});
}
