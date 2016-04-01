 var helpers=Factory.getService('helpers');
module.exports = {
  hello: function(req, res, next) {
  //  console.log(helpers);
    res.render('index.html');

  }
};
