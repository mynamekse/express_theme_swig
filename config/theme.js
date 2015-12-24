// var express = require('express');
// var app = express();

// var path = require('path');
// module.exports(function(app, database) {
//   console.log(app);
//
// });

// var
// console.log(module.exports.hello);
// module.exports = {
//   setTheme:function(app,path){
//     app.set('views', path);
//     app.set('view engine', 'jade');
//   }
// }
module.exports.setTheme = function(app, path) {
    app.set('views', path);
    app.set('view engine', 'jade');


  }
  // module.exports = function (app,path) {
  //   app.set('views', path);
  //   app.set('view engine', 'jade');
  // };
