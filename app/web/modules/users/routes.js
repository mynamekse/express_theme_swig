var express = require('express');
var router = express.Router();
var user=require('./controllers').authenCtr;

router.get('/login',user.login);


module.exports=router;
