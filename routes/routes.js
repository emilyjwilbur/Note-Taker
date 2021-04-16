const fs = require('fs');
const path = require('path');

let notes = [];

module.exports = app => {


// html routes, api routes

app.get('/notes', (req, res) => res.redirect('notes.html'));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));


app.get('/api/notes', (req,res) => res.json(notes));



app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    notes.push(newNote);
    updateDb();
    return console.log("New note added: "+newNote.title);
});


}