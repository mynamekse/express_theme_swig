function Middle(){
  var group=[];
  var key=[];

  this.addGroup=function(number,ddd){
    var middle={
         name:number,
         instant:ddd,
    }

    group.push(middle);

  }
  this.loop=function(){
     keys = [];
    for (var i = 0; i < group.length; i++) {
      // console.log(group[i]);
      var number=group[i].name;
      // console.log(number);
      console.log(number);
      keys['i']=group[i].instant;
      // console.log(group[i].name);
    };
    // keys.sort();
    // for (var i = 0; i < keys.length; i++) {
    //   // console.log(group[i]);
    //   keys[i].say();
    // };
    console.log(keys.length);
  }
}
var wow={
  say:function(){
    console.log('wow');
  }
}

var ab={
  say:function(){
    console.log('ab');
  }
}

var bc={
  say:function(){
    console.log('bc');
  }
}
var dd=new Middle();


dd.addGroup('1',wow);
dd.addGroup('4',ab);
dd.addGroup('1',bc);
dd.loop();
