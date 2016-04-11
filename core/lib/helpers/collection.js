var collection={
  item:{},
  setCollection:function(key,value){
    collection.item[key]=value;
  },
  getCollection:function(key){
    if (collection.item!==null) {
          return collection.item[key];
    }
  }
}


module.exports.collection=function(){
  return collection;
};
