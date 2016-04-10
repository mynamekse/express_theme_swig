var express = require('express');
var router = express.Router();
var authenCtr=require('./controllers').authenCtr;

router.get('/login',authenCtr.login);


module.exports=router;
