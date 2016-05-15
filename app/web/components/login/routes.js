var express = require('express');
var router = express.Router();
var user=require('./controllers').user;
router.get('/login',user.login);


module.exports=router;
