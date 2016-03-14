if (require.main === module) {
  console.log('ddddddd');
}else{
  module.exports.hello=function(){
    console.log('hello');
  }  
}
