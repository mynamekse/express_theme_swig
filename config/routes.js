var contact = rootRequire('core/plugins/contact/routes');
module.exports = function(option) {
    var app = option.app;
    var route_config = {
        apply: function() {
            app.use(contact);
    
        }
    };
    return route_config;
}
