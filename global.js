global.__base = __dirname;


global.rootRequire = function(name) {
    return require(__dirname +'/'+ name);
}
