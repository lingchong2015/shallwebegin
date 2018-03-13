var express = require('express');// Creates an Express application. The express() function is a top-level function exported by the express module.
var path = require('path');// The path.join() method joins all given path segments together using the platform specific separator as a delimiter, then normalizes the resulting path.
var favicon = require('serve-favicon');
var logger = require('morgan');// Public interface of morgan logger.
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var users = require('./routes/users');
var router = require('router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/app/views'));// A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array.
app.set('view engine', 'ejs');// The default engine extension to use when omitted.

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
app.use('/', index);
app.use('/users', users);
*/
// Router will be used to replace two lines code which is router above.
router(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;