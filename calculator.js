//jshint esversion:6

const express = require("express");
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.sendFile("index.js")
});

app.listen(port, () =>{
    console.log(`Calculator app listening at http://localhost:${port}`);
});