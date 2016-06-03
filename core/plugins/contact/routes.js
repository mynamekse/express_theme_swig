var express = require('express');
var router = express.Router();

/* GET users listing. */

var contactService={
  show:(callback)=>{
    callback();
  }
}
router.get('/contact', (req, res, next)=> {
  contactService.show(()=>{
    res.send('ddddddd');
  });
});

module.exports = router;
