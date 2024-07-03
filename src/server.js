require("dotenv").config();

const express = require ("express");
const mongoose = require("mongoose")

const book = require ("./books/model");

const connection = require("./db/connection");

const bookRouter = require ("./books/routes")

const app = express ();

app.use(express.json());

connection();

app.use(bookRouter);


// addBook
app.post("/books/addBook", async (request, response) => {
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
});
// app.put ("/books",(request,response) => {
//     function findBooks (x) { 
//         return x.title === request.body.title;

//         const index = books.findIndex(findBook);

//         console.log (index);
//     }
//     const index 


// });

// app.delete("/books", (request, response) => {

//     // function findBooks (x) { 
//     //     return x.title === request.body.title;

//     //     const index = books.findIndex(findBooks);

//     //     console.log (index);

// });




app.listen(5001,()=>{
    console.log(`Server listening of port 5001`);
});