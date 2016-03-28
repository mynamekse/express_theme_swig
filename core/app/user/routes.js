

var router = require('express').Router();
var path = require('path');
var usersControlller=require('./controllers/users.js');
/* GET users listing. */
router.get('/users',usersControlller.hello);

module.exports = router;
