var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: {type: String, maxlength: 10, required: true},
    password: {type: String, required: true},
});


// Mongoose automatically looks for the plural version of your model name.
// Thus, for the example above, the model user is for the users collection in the database.
var user = mongoose.model('user', usersSchema);

module.exports = user;