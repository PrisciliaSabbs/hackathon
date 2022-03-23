const express = require("express");
const app = express();
const PORT = 5000;
//const mongoose = require("mongoose");

app.set('view engine','ejs');

//app.use(express.status("public"));




app.listen(PORT, () => {
    console.log("Listening at port ", PORT);
});