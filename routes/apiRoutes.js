//require

const { json } = require('express');
const notesData = require('../db/notes');

module.exports = (app) => {

    // app.get("/api/notes", (req, res) => res.json(notesArray));
    // console.log(notesArray);

    app.post("/api/notes", (req, res) => {
        console.log(notesData);
    })
}