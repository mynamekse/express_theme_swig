'use strict'
var env = process.env.NODE_ENV || 'development'
var port = process.env.PORT || 3000
var host = 'http://localhost' + (port != 80 ? ':' + port : '');
var path = require('path');
var DEBUG = env !== 'production'

module.exports.setOptions=function(option){
  option.mode=option.mode  || ''
  if (option.mode=='development') {

  }
}


module.exports = {

    //http://koajs.com/#application
    name: "foo",
    keys: ['8474854d94719f07c36bb5c16a567a3acce0090ba'],
    env: env,
    port: port,
    mode: {
      local: {
        http: {
          port: 8080,
          host: '0.0.0.0',
          labels: ['http']
        },
        api: {
          port: 8088,
          host: '0.0.0.0',
          labels: ['api']
        }
      },
    },

  static: {
    directory: path.resolve(__dirname, '../web')
  },
  //https://github.com/koajs/body-parser#options
  bodyparser: {},
  //https://github.com/koajs/generic-session#options
  session: {
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 //24 hours
    }
  },
  //https://github.com/rkusa/koa-passport
  auth: {},
  //https://github.com/koajs/ejs
  view: {
    root: path.resolve(__dirname, '../views'),
    cache: DEBUG ? false : 'memory',
    // locals: require('./view-locals'),
    // filters: require('./view-filters'),
    layout: 'layouts/main',
  },
  //https://github.com/balderdashy/waterline
  //https://github.com/balderdashy/waterline-docs#supported-adapters
  database: {
    // Setup Adapters
    // Creates named adapters that have been required
    adapters: {
      // 'default': require('sails-disk'),
    },
    // Build Connections Config
    // Setup connections using the named adapter configs
    connections: {
      'default': {
        adapter: 'default',
      }
    },
    defaults: {
      migrate: 'alter'
    }

  },
  //https://github.com/gusnips/koa-error-ejs
  error: {
    view: 'error/error',
    layout: 'layouts/error',
    custom: {
      401: 'error/401',
      403: 'error/403',
      404: 'error/404',
    },
  },
};
