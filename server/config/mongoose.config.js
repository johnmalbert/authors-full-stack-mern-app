const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Mongoose is ready to roll"))
    .catch(err => console.log("Error connecting to mongodb", err));