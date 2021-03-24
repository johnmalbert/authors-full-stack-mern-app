//schema
const mongoose = require('mongoose');
//design author
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ["Author name is required"],
        minLength: [3, "Author name must be more than two characters"]
    }
}, {timestamps: true })
//export
const Author = mongoose.model('author', AuthorSchema);
module.exports = Author;