'use strict'
var express = require('express');
let userApp=express()


userApp.get('/hello',function(req,res){
  res.render('page0');
})

userApp.get('/page',function(req,res){
  res.render('page');
  // res.send('dd');
})
userApp.route('/ddd')
  .get(function(req, res) {
    res.send('Get a random book');
  })

  // let view=rootRequire('core/config/view')(userApp);
module.exports=userApp;
