var authenController = {
  login: function(req, res) {
    var _data = {
      page_title: 'ass',
      b2: 'ddddddddddd'
    }
    var dd = '';

    res.render('login.index.html', {
      data: _data,


    });
  },
  logout: function(req, res) {

  }
}


module.exports.authenCtr = authenController;
