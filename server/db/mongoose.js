// Require Mongoose
var mongoose = require('mongoose');

// Use Global Promise
mongoose.Promise = global.Promise;

// Connect to Mongo Database
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = { mongoose };