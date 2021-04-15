const fs = require('fs');
const path = require('path');


module.exports = app => {



// api routes

app.get("/api/notes", function(req, res) {
    res.json(notes);
});

app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("New note added: "+newNote.title);
});

// html routes
app.get('/notes', function(req, res) {
    res.json(path.join(__dirname, "public/notes.html"));
  });

  app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
}