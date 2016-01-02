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
var app = require('express')(),
  swig = require('swig'),
  people;
  app.engine('html', swig.renderFile);

  app.set('view engine', 'html');
  app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });



var theme={
  path:[],
  isSetView:false,
  setApp:function(app){
    this.app=app;
  },
  setEngine:function(){
    // this.app.engine('html', swig.renderFile);
    // this.app.set('view cache', false);
    //   swig.setDefaults({ cache: false });
    //   this.app.set('view engine', 'html');
    //   this.app.engine('html', swig.renderFile);
  },
  addPath:function(path){
    this.path.push(path);
  },

  end:function(){
    app=this.app;



    for (index = 0; index < this.path.length; ++index) {
      app.set('views',this.path[index]);
      // console.log('set view'+index + new Date().getSeconds());
    }
    // this.app.set('view engine', 'jade');
  }
}


module.exports=theme;

// module.exports = function (app,path) {
//   app.set('views', path);
//   app.set('view engine', 'jade');
// };
