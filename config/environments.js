
var os = require('os');

module.exports = function(app) {
    var port = process.env.PORT || 3000;

    app.configure('development', function() {
        this
            .set('host', 'localhost')
            .set('port', port)
            .set('env','development')
        ;
    });

    app.configure('production', function (){
        this
            .set('host', os.hostname())
            .set('port', port)
            .set('env','production')
        ;
    });

        var settings = require('./settings/' + app.set('env'))();

        Object.keys(settings).forEach(function(i) {
            app.set(i, settings[i]);
        });

    return app;
};
