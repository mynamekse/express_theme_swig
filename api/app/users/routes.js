

var router = require('express').Router();
var path = require('path');
var usersControlller=require('./controller/users.js');
/* GET users listing. */
router.get('/users',usersControlller.hello);

module.exports = router;
