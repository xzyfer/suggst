
module.exports = function(app) {
    var frontpage = require('../controllers/frontpage')(app);

    //  Load database and pass it down to the controllers

    // var db = app.set('db');

    //  Load Root
console.log(frontpage);
    app.get('/', frontpage.index);
};
