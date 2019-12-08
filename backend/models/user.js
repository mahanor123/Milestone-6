import mongoose from 'mongoose';

const userschema = mongoose.Schema({
    name: String,
    createdOn: {
        type: Date,
        default: Date.now
    },
    posts: Number,
    comments: Number

});

module.exports = mongoose.model('users',userschema);
