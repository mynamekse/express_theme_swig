var express = require('express');
var web =express();

var collection=rootRequire('./core/api/helpers/collection').collection();
web.get('/',function(req,res,next){
  var _data={
    title:'ddee'
  }

 res.render('login.index.html',{data:_data});

});
web.set("PATH.ROOT",__dirname);
require('../core/config/view')(web);

module.exports=web;
