var mongoose = require('mongoose');

var Artist = mongoose.model('Artist', {
    artistName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    artistGenre: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    artistCity: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    artistState: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    artistEmail: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

});

module.exports = { Artist };