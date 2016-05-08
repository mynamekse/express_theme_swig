"use strict"
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes addddd noise.');
  }
}


module.exports=Animal;
