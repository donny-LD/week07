require("dotenv").config();

const express = require ("express");
const mongoose = require("mongoose")
const cors = require("cors");

const book = require ("./books/model");

const connection = require("./db/connection");

const bookRouter = require ("./books/routes")

const app = express ();

app.use(express.json());

connection();

app.use(bookRouter);

//example
app.get("/books",(request, response)=>{

    // console.log(requst.path,":", typeof requst.path);
    // console.log(response);
    response.send("hello from /books")
})



app.post ("/books/addBook", (request,response) => {
//   console.log(request.body);
  fakeData.push(request.body);

  const successResponse = {
    message: "success",
    books: fakeData,
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