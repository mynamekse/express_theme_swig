'use strict'
var express = require('express');
let userApp=express()

let view=rootRequire('core/config/view')(userApp);

userApp.get('/hello',function(req,res){
  res.render('page');
})

userApp.get('/',function(req,res){
  res.render('page');
})
userApp.route('/ddd')
  .get(function(req, res) {
    res.send('Get a random book');
  })

module.exports=userApp;
