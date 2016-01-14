
var theme_swig={
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



module.exports=function(config){
  function theme_swig_up(){
    var swig = require('swig');
    theme_swig.setApp(config.app);
    theme_swig.addPath(config.views_path);
    theme_swig.setEngine(swig);
    theme_swig.end();
  }

   theme_swig_up();
  //  var path = require('path');

}
