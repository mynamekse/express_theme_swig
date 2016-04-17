'use strict'
var express = require('express');
let userApp=express()


userApp.get('/page/home',function(req,res){
  res.render('__base');
})

userApp.get('/page/:pagename',function(req,res){
  let pagename=req.params.pagename;
  res.render(pagename);
  // res.send('dd');
})
userApp.route('/ddd')
  .get(function(req, res) {
    res.send('Get a random book');
  })

 let view=rootRequire('core/config/view')(userApp);
module.exports=userApp;
