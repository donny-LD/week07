require ("dotenv").config();
const express = require ("express");
const mongoose = require("mongoose");
const cors = require ("cors")

const Book = require ("./books/model");

const connection = require("./db/connection");

const bookRouter = require ("./books/routes");


const app = express ();

app.use(cors());

app.use(express.json());

connection();

app.use(bookRouter);






app.put ("/books", async (request,response) => {


});





// app.delete("/books", (request, response) => {
//   const title = request.body.title; // Get the title from the request body

//   Book.findOneAndDelete({ title })
//     .then(
//       (deletedBook) =>
//         deletedBook
//           ? response.status(200).json({
//               message: "Book successfully deleted",
//               book: deletedBook, // Return the deleted book information
//             })
//           : response.status(404).json({ message: "Book not found" }) // If no book is found
//     )
//     .catch((error) => response.status(500).json({ message: error.message })); // Error response
// });




app.listen(5001,()=>{
    console.log(`Server listening of port 5001`);
});
