const{ Router } = require("express");
const bookRouter = Router();

// const Book = require("./model")



const { getAllBooks, addBook } = require("./controllers");

// const {addBook} = require ("./controllers")


// getAllBooks
bookRouter.get("/books/getAllBooks",getAllBooks,);

//addBook
bookRouter.post("/books/addBook",addBook);


module.exports = bookRouter;