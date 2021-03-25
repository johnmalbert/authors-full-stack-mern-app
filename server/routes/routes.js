//import the controllers
const AuthorController = require('../controllers/author.controller');

//an object containing all the api routes to controller methods
module.exports = function(app) {
    app.post("/api/authors", AuthorController.createAuthor);
    app.get("/api/authors", AuthorController.getAllAuthors);
    app.get("/api/authors/:id", AuthorController.getOneAuthor);
    app.put("/api/authors/:id/", AuthorController.updateAuthor);
    app.delete("/api/authors/:id/", AuthorController.deleteAuthor);
    app.post("/api/authors/:id/quote", AuthorController.createQuote);
    // app.get("/api/authors/:id/quote", AuthorController.getQuotes);
}