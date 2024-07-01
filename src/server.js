const express = require ("express");

const app = express ();

app.use("/example", express.static("example"));

app.use("/document", express.static("document"));


app.listen(5001,()=>{
    console.log(`Server listening of port 5001`);
});