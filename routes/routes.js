const fs = require('fs');
const path = require('path');






// routes

app.get('/notes', function(req, res) {
    res.json(path.join(__dirname, "public/notes.html"));
  });

  app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});