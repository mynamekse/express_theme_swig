var express = require('express');
var router = express.Router();

router.get('/abc',function(req,res){
  // var _data = {
  //   page_title: 'abc end'
  // }
  //
  // res.render('static.index.html', {
  //   data: _data
  // });
  res.end('d');
});
module.exports=router;
