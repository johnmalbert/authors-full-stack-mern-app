//require the model
const Author = require('../models/Author');
//export
module.exports = {
    //object with CRUD
    //c
    createAuthor: (req, res) => {
        Author.exists({name: req.body.name})
            .then(authorExists => {
                if(authorExists){
                    return Promise.reject({ errors: { name:  { message: "An author with that name already exists."}}});
                } else {
                    return Author.create(req.body);
                }
            })
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({ message: "error", errors: err.errors }));
        // Author.create(req.body)
        //     .then(author => res.json(author))
        //     .catch(err => console.log("Error creating an author", err));
    },
    //r
    getAllAuthors: (req, res) => {
        Author.find()
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    getOneAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
    //u
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    //d
    deleteAuthor: (req, res) => {
        Author.findOneAndDelete({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    }
}