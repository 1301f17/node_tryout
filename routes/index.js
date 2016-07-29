var express = require('express');
var PythonShell = require('python-shell');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , isAuthenticated: req.isAuthenticated(), user: req.user, flash: req.flash('error')});
});

router.get('/python', function(req, res, next) {
  var options = {
    scriptPath: __dirname + '/..'
  };
  PythonShell.run('script.py', options, function (err, results) {
    if (err) throw err;
    if (results){ // results is an array containing the printing outputs from python
      res.send(JSON.parse(results[0])['name']);
    }
  });
});

module.exports = router;
