/**
 * Router for the whole program.
 */
var index = require('./index');
var users = require('./users');

var debug = require('debug')('shallwebegin:router');
debug.enabled = true;

var Router = function(app) {
    app.use(function timeLog(req, res, next) {
        debug(req.method, req.url);
        next();
    });

    app.use('/', index);
    app.use('/users', users);
}

module.exports = Router;