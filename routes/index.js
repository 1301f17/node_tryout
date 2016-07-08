var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , isAuthenticated: req.isAuthenticated(), user: req.user, flash: req.flash('error')});
});

module.exports = router;
