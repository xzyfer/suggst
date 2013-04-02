
var controller = {}
  , app
  , db
;

// Constructor

module.exports = function (_app) {
    app = _app;
    db  = app.set('db');
    return controller;
};


/*
 * GET home page.
 */

controller.index = function(req, res) {
    console.log(req.session);
    res.render('frontpage/index', {  });
};
