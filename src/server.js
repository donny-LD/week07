require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connection = async() => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log ("db is working")
}

connection()

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    required: true,

  },
  author:{
    type:String,

  }
});

const Book = mongoose.model ("Book", bookSchema)

//get all books
app.get("/books/getAllBooks", (request, response) => {
    
});

app.post("/books/addBook",async (request, response) => {
    const book = await Book.create ({
        title:request.body.title,
        genre:request.body.genre,
        author:request.body.author,
    })

    const successResponse = {
        message: "success",
        book:book
    }

    response.send(successResponse)
});

app.put("/books", (request, response) => {});

app.delete("/books", (request, response) => {});

app.listen(5001, () => {
  console.log(`Server listening of port 5001`);
});
