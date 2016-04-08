var user={
  login:function(req,res){
    var _data = {
      page_title: 'Login'
    }
    var dd = '';

      res.render('login.index.html', {
        data: _data
      });
  },
  logout:function(req,res){

  }
}

module.exports.user=user;
