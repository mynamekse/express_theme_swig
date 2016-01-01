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
module.exports={
  path:[],
  isSetView:false,
  setApp:function(app){
    this.app=app;
  },
  setEngine:function(){
      this.app.set('view engine', 'jade');

  },
  addPath:function(path){
    this.path.push(path);
  },

  end:function(){
    app=this.app;
    for (index = 0; index < this.path.length; ++index) {
      app.set('views',this.path[index]);
      console.log('set view'+index + new Date().getSeconds());
    }
    this.app.set('view engine', 'jade');
  }
}

// module.exports = function (app,path) {
//   app.set('views', path);
//   app.set('view engine', 'jade');
// };
