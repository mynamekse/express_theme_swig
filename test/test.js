var express = require('express');

var app = express();

var port = 3000;

app.get('/', function(der, resff) {
  resff.type('text/plain');
  resff.send('Meadowlark Travel');
});
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  console.log('hello 1 %s',new Date());
  next();
});

router.get('/', function(req, res, next) {

  res.send('hello 2');
  console.log('hello 2 %s',new Date());
  next();
},function(req,res,next){
    console.log('hello 3 %s',new Date());
    next();
});

router.get('/java', function(req, res, next) {

  res.send('abcd');
});


app.use('/hello',router);
app.use('/hello',function(req, res, next) {

    console.log('hello 4 %s',new Date());
});
app.get('/foo',
  function(req, res, next) {
    if (Math.random() < 0.33) return next();
    res.send('red');
  },
  function(req, res, next) {
    if (Math.random() < 0.5) return next();
    res.send('green');
  },
  function(req, res) {
    res.send('blue');
  }
)
app.listen(port, function() {
  console.log('The server is running, ' +
    ' please, open your browser at http://localhost:%s',
    port);
});
