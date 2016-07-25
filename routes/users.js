var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');


/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.model('user').find({}, function(err, docs){
    res.send(docs);
  });
});

// router.post('/signup', function(req, res, next) {
//   User = mongoose.model('user');
//   new_user = new User(req.body);
//   new_user.save(function (err) {
//     if (err) {
//       res.send(err.errors);
//     }
//     else {
//       res.send('new user added');
//     }
//   });
// });

// router.post('/login',
//     passport.authenticate('local', { successRedirect: '/',
//       failureRedirect: '/',
//       failureFlash: true // put the failure message into req.flash('error') so that it can be displayed in the views.
//     })
// );

router.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/',
        failureRedirect: '/' }));

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;
