var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  db.collection('users').find().toArray(function(err, docs){
    res.send(docs);
  })


});

module.exports = router;
