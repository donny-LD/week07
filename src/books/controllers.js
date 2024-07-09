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

const putBook = async (request, response) => {
  const { newAuthor } = request.body; // Destructure newAuthor from request body
  const { title } = request.params; // Get title from URL parameters

  const result = await Book.updateOne(
    { title }, // Filter
    { author: newAuthor } // Update
  )
  .then((result) => {
    const successResponse = {
      message: result.matchedCount === 0 ? "Book not found" : "Author successfully updated",
      result: result, // Return the update result
    };
    response.status(result.matchedCount === 0 ? 404 : 200).json(successResponse);
  })
  .catch((error) => {
    response.status(500).json({ message: error.message }); // Error response
  });
};

const deleteBook = async (request, response) => {
  const book = await Book.deleteOne({
    title: request.body.title,
  });

  const successResponse = {
    message: "success",
    book: book,
  };
  response.send(successResponse);
};

module.exports = {
  getAllBooks: getAllBooks,
  addBook: addBook,
  deleteBook: deleteBook,
  putBook: putBook,
};

// const deleteBook = async (request, response) => {
//   try {
//     const result = await Book.deleteOne({
//       title: request.body.title,
//     });

//     if (result.deletedCount === 0) {
//       return response.status(404).json({ message: "Book not found" });
//     }

//     const successResponse = {
//       message: "Book successfully deleted",
//       result: result,
//     };
//     response.status(200).send(successResponse);
//   } catch (error) {
//     response.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   deleteBook,
// };
