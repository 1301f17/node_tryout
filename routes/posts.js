var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoose.model('post').find({}).populate('postedBy').exec(function(err, posts){
        response_str = ''
        for (i = 0; i < posts.length; ++i) {
            response_str = response_str + posts[i].content + ' posted by: ' + posts[i].postedBy.name + ' ';
        }
        res.send(response_str)
    });
});

module.exports = router;
