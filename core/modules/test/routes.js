var express = require('express');
var router = module.exports = express.Router();


function link(route_name,callback){
  return function(req,res){
    callback(req,res);
  }
}

router.get('/test', link('nadddddddddme',function(req,res){
   res.render('page.html',{test:'dd'});

}));
