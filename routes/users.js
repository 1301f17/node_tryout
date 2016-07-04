var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.model('user').find({}, function(err, docs){
    res.send(docs)
  });
});

module.exports = router;
