const express = require ("express");

const app = express ();


app.use(express.json());

const fakeData = [
  { id: 1, title: "book1", author: "author1", genre: "genre1" },
  { id: 2, title: "book2", author: "author2", genre: "genre2" },
  { id: 3, title: "book3", author: "author3", genre: "genre3" },
];
//example
app.get("/books",(request, response)=>{

    // console.log(requst.path,":", typeof requst.path);
    // console.log(response);
    response.send("hello from /books")
})

//get all books
app.get("/books/getAllBooks",(request, response)=>{
    console.log(request.path);

    const successResponse = {
        message: "success",
        books: fakeData,
    };
    
    response.send(successResponse);
});

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