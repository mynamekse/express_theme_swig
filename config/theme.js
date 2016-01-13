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
// var app=require('express');
// var  swig = require('swig'),people;
//   app.engine('html', swig.renderFile);
//
//   app.set('view engine', 'html');
//   app.set('view cache', false);
// // To disable Swig's cache, do the following:
// swig.setDefaults({ cache: false });
//
//
//  app.disable('view cache');

swig = require('swig');
//
// function dd(){
//
//   var theme={
//     path:[],
//     isSetView:false,
//     setApp:function(app){
//       this.app=app;
//     },
//     setEngine:function(engine){
//       this.app.engine('html', engine.renderFile);
//       this.app.set('view cache', false);
//         engine.setDefaults({ cache: false });
//         this.app.set('view engine', 'html');
//         this.app.engine('html', engine.renderFile);
//     },
//     addPath:function(path){
//       this.path.push(path);
//     },
//
//     end:function(){
//       app=this.app;
//       for (index = 0; index < this.path.length; ++index) {
//         app.set('views',this.path[index]);
//         // console.log('set view'+index + new Date().getSeconds());
//       }
//       // this.app.set('view engine', 'jade');
//     }
//   }
// }



module.exports =function(app){

  app.engine('html', swig.renderFile);
  app.set('view cache', false);
    swig.setDefaults({ cache: false });
    app.set('view engine', 'html');
    app.engine('html', swig.renderFile);

    app.set('views','../views');
  // config_theme.setApp(app);
  // config_theme.addPath(path.join(__dirname, 'views'));
  //
  // config_theme.setEngine(swig);
  // config_theme.end();

};

// module.exports = function (app,path) {
//   app.set('views', path);
//   app.set('view engine', 'jade');
// };
