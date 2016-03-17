var express = require('express');

var app = express();

module.exports = {
  createApp:function(){
       return app;
  },
  get:function(name){
    switch (name) {
      case 'app':
        return this.createApp();
        break;
      default:

    }
  }

}
