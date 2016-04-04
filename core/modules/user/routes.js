

var express = require('express');
var router = express.Router();


function link(route_name,callback){
  return function(req,res){
    callback(req,res);
  }
}

router.get('/about', link('name',function(req,res){
  res.render('index.user.html');

}));



// router.get('/about',link('name',function(req,res,next){
//     res.render('index.user.html');
// }));




module.exports = router;
