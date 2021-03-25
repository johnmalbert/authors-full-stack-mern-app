const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: ["Quote cannot be blank."],
        minLength: [10, "Quote must be at least 10 characters long."]
    }, 
    votes: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

module.exports = QuoteSchema;