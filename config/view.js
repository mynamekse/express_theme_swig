var path = require('path');

module.exports = function(app) {

    var view_config = {
        apply: function() {
            app.set('views', path.join(__root_path, 'views'));
            app.set('view engine', 'jade');
        }
    };
    return view_config;
}
