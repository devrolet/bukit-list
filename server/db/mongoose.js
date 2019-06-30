// Require Mongoose
var mongoose = require('mongoose');

// Use Global Promise
mongoose.Promise = global.Promise;

// Connect to Mongo Database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
// mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };