const{ Router } = require("express");
const bookRouter = Router();

// const Book = require("./model")



const { getAllBooks, addBook, deleteBook ,putBook} = require("./controllers");



// getAllBooks
bookRouter.get("/books/getAllBooks",getAllBooks,);

//addBook
bookRouter.post("/books/addBook",addBook);

// update book 
bookRouter.put("/books/putBook",putBook);

//delete book
bookRouter.delete("/books/deleteBook",deleteBook);


module.exports = bookRouter;