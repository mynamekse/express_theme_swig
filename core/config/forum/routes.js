

var express = require('express');
var router = express.Router();


function link(route_name,callback){
  return function(req,res){
    callback(req,res);
  }
}

router.get('/dffgfd', link('name',function(req,res){
 res.end('dd');
}));



// router.get('/about',link('name',function(req,res,next){
//     res.render('index.user.html');
// }));




module.exports = router;
