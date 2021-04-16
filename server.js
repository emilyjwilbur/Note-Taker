// dependencies 
const express = require("express");
const fs = require("fs");
const path = require('path');

// sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;


// setting up express app to handle data parsing

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// routes file required
require('./routes/routes')(app);


// listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

