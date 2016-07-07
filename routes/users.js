var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.model('user').find({}, function(err, docs){
    res.send(docs);
  });
});

router.post('/insert', function(req, res, next) {
  User = mongoose.model('user');
  new_user = new User(req.body);
  new_user.save(function (err) {
    if (err) {
      res.send(err.errors);
    }
    else {
      res.send('new user added');
    }
  });
});

module.exports = router;
