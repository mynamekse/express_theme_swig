module.exports={
  renderLogin:function(req,res,next){
    var _data={
      title:'dddddddddddddd'
    }

     res.render('login.index.html',{data:_data});
  }
}
