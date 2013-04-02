/**
 * Load dependencies
 */

var express       = require('express')
    // , mongoose      = require('mongoose')
    // , models        = require('./models')
    , config        = require('./config')
    , routes        = require('./routes')
    , environments  = require('./environments')
    , errors        = require('./errors')
    , oauth         = require('./oauth')
    // , hooks         = require('./hooks')
;

module.exports = function () {

    //  Create Server

    var app = express.createServer();

    //  Load Mongoose Models

    // models(app);

    //  Load Expressjs config

    config(app);

    //  Load Environmental Settings

    environments(app);

    //  Load routes config

    routes(app);

    //  Load error routes + pages

    errors(app);

    //  Load oAuth

    oauth(app);

    return app;

};
