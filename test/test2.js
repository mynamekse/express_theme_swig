'use strict';
let foo = 123;
if (true) {
    let foo = 456;
}
console.log(foo); // 456;

function name(name){
  var _name=name||'3000';
  console.log(_name);
}

name('34');
var xyz = require('./xyz');
var xydz = require('./xyz');
