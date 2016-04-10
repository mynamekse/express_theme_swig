var authenController={
  login:function(req,res){
    var _data = {
      page_title: 'abcd',
      b2:'dd'
    }


      res.render('login.index.html', {
        data: _data
      });
  },
  logout:function(req,res){

  }
}


module.exports.authenCtr=authenController;
