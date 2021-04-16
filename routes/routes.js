const fs = require('fs');
const path = require('path');

let notes = [];

module.exports = app => {

fs.readFile(path.join(__dirname,"../db/db.json"), "utf8", (err, data) =>
{
    console.log(data);
    notes = JSON.parse(data);
});

// html routes, api routes
app.get('/api/notes', (req,res) => res.json(notes));



app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    notes.push(newNote);


    fs.writeFile(path.join(__dirname,"../db/db.json"), JSON.stringify(notes), err => {
        if(err){
            console.error(err);
            return;
        }
    });
    return console.log("New note added: "+newNote.title);
   
});
res.json(newNote);



app.get('/notes', (req, res) => res.redirect('notes.html'));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));












}