const Book = require("./model");

// function to get all books
const getAllBooks = async (request, response) => {
  // step1: db interaction

  const books = await Book.find({});

  // step2: create success object
  const successResponse = {
    message: "success",
    books: books,
  };

  // step 3: send response

  response.send(successResponse);
};


//controller function to add new book
const addBook = async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
};

module.exports = {
    getAllBooks: getAllBooks,addBook

};
// module.exports = {
//   addBook: addBook,
// };
