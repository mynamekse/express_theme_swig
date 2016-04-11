var express = require('express');
var router = express.Router();
var authenCtr=require('./controllers').authenCtr;

router.get('/login',authenCtr.renderLogin);
router.post('/login',authenCtr.actionLogin);


module.exports=router;
