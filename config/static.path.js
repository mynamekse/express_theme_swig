module.exports.setStaticPath= function(app, path) {

    app.use(express.static(path.join(__dirname, 'public')));

  }
