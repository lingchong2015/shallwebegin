var express = require('express');
var router = express.Router();

var debug = require('debug')('shallwebegin:server');
debug.enabled = true;

router.use(function timeLog(req, res, next) {
  debug(req.method, req.url);
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
