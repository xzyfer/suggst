
/**
 *  Load external modules / see readme for bundle instructions
 */

require('./lib/exceptions');

if(!process.env.NODE_ENV)
    process.env.NODE_ENV='development';

//  Load boot file and fire away!

var cluster = require('cluster')
  , numCPUs = require('os').cpus().length
;

if ( false && cluster.isMaster ) {
    for (var i = 0; i < numCPUs; ++i) {
        cluster.fork();
    }
} else {
    var app = require('./config/app')();
    var port = process.env.PORT || 3000;

    // proxy voodoo for using oauth in dev
    if(process.env.NODE_ENV !== 'production') {
        require('http-proxy').createServer({router:{'sugg.st':'localhost:' + port}}).listen(80);
    }

    app.listen(port);

    console.log('\x1b[36mSugg.st\x1b[90m running as \x1b[1m%s\x1b[0m on http://%s:%d',
        app.set('env'),
        app.set('host'),
        port
    );
}
