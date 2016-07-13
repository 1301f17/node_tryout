var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET all posts. */
router.get('/', function(req, res, next) {
    mongoose.model('post').find({}).populate('postedBy').exec(function(err, posts){
        response_str = ''
        for (i = 0; i < posts.length; ++i) {
            response_str = response_str + posts[i].content + ' posted by: ';
            if (posts[i].postedBy) { // if the postBy field of the post is not empty
                response_str = response_str + posts[i].postedBy.username + ' ';
            }
            response_str = response_str + '<br/>';
        }
        res.send(response_str)
    });
});

/* GET post by id. */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    mongoose.model('post').findOne({'_id': id}).populate('postedBy').exec(function(err, post){
        if (err) {
            res.send('cannot find id');
        } else {
            var response_str = post.content + ' posted by: ';
            if (post.postedBy) { // if the postBy field of the post is not empty
                response_str = response_str + post.postedBy.username + ' ';
            }
            res.send(response_str);
        }

    });
});

module.exports = router;
