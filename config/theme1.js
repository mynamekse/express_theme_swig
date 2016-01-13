var swig = require('swig');
// app.engine('html', swig.renderFile);
//
// app.set('view engine', 'html');
// app.set('view cache', false);
// // To disable Swig's cache, do the following:
// swig.setDefaults({
//   cache: false
// });
// //
//
//  app.disable('view cache');
// var config_theme = require("./config/theme");


// config_theme.setApp(app);
// config_theme.addPath(path.join(__dirname, 'views'));
//
// config_theme.setEngine(swig);
// config_theme.end();
var theme={
  path:[],
  isSetView:false,
  setApp:function(app){
    this.app=app;
  },
  setEngine:function(engine){
    this.app.engine('html', engine.renderFile);
    this.app.set('view cache', false);
      engine.setDefaults({ cache: false });
      this.app.set('view engine', 'html');
      this.app.engine('html', engine.renderFile);
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

theme.prototype=function(ddd){
  console.log("DDDdd");
}
module.exports=theme;

// module.exports = function (app,path) {
//   app.set('views', path);
//   app.set('view engine', 'jade');
// };
