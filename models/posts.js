var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    content: String
});


// Mongoose automatically looks for the plural version of your model name.
// Thus, for the example above, the model user is for the users collection in the database.
var post = mongoose.model('post', postsSchema);

module.exports = post;