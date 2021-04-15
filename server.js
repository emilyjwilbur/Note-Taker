const express = require("express");
const fs = require("fs");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


// link assets
app.use(express.static('public'));

// parsing data

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// routes file required
require('./routes/routes')(app);


// listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

