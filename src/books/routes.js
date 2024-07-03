const{ Router } = require("express");
const bookRouter = Router();

const Book = require("./model")



const { getAllBooks } = require("./controllers");


// getAllBooks
bookRouter.get("/books/getAllBooks",getAllBooks);

module.exports = bookRouter;