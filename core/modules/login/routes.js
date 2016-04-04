

var express = require('express');
var router = express.Router();
var controller=require('./controller');

function link(route_name,callback){
  return function(req,res){
    callback(req,res);
  }
}

var b=function(req,res,next){

   req.render('login.index.html');
  // req.end('ddddddd')
}

router.get('/login', controller.renderLogin);



// router.get('/about',link('name',function(req,res,next){
//     res.render('index.user.html');
// }));




module.exports = router;
