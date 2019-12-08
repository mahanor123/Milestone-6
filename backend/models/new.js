const mongoose = require('mongoose');
const newsSchema = mongoose.Schema({
    title: String,
    url: String,
    time: {
        type: Date,
        default: Date.now
    },
    person: String,
    likes: Number,
    comments: String


});

module.exports = mongoose.model('new',newsSchema);