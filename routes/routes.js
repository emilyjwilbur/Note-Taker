const fs = require('fs');
const path = require('path');



app.get("/index", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });