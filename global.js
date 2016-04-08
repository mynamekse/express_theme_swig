global.__base = __dirname + '/';
global.__web  = __base + 'app/web';

global.rootRequire = function(name) {
    return require(__dirname +'/'+ name);
}
