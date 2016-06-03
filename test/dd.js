'use strict'
// function MyObject(bar) {
//   this.bar = bar;
// }
// class Polygon {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
//
// module.exports =function(h,w){
//   return new Polygon(h,w);
// }

"use strict";

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static setApp(app){
      Point.app=app;
    }
    static getApp(app){
      return Point.app;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
    }
}

Point.setApp('ddddddddddddddddd');
console.log(Point.getApp());
// function MyObject(bar) {
//   this.bar = bar;
// }
//
// MyObject.prototype={
//   foo:function() {
//     console.log(this.bar);
//   }
//
// }
// module.exports = MyObject;
exports.b='cbb'
exports.c='ccc';
