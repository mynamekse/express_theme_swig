"use strict";

class Config {
    constructor(option) {
        this.app = option.app;
        this.middleware_cofig = rootRequire('config/middleware')(this.app);
        this.view_config = rootRequire('config/view')(this.app);
        this.routes_config = rootRequire('config/routes')({
            app: this.app
        });
        this.created = false;
    }
    apply() {
        let app = this.app;
        this.middleware_cofig.apply();
        this.view_config.apply();
        this.routes_config.apply();
    }

}


module.exports = function(app) {
    return new Config({
        app: app
    });
}
