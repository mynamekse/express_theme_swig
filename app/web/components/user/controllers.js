var authenController = {
    renderLogin: function(req, res) {
        var _data = {
            page_title: 'abcd',
            b2: 'abcdef'
        }

        res.render('login.index.html', {
            data: _data
        });
    },
    actionLogin: function(req, res) {
        var _data = {
            page_title: 'action login',
            b2: 'abcdef'
        };


        res.render('login.index.html', {
            data: _data
        });
    },
    logout: function(req, res) {

    }
}


module.exports.authenCtr = authenController;
