const express = require ("express");

const app = express ();

app.use("/example", express.static("example"));

app.listen(5001,()=>{
    console.log(`Server listening of port 5001`);
});