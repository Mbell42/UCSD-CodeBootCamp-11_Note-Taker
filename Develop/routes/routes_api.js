// Grabbing Dependencies
const fs = require("fs");
const data = require("../db/db.jsno");

// Routing
module.exports = (app) => {
    // API GET routes
    app.get("/api/notes", (request,result) => {
        // Read from the db
        fs.readFile("./db/db.json", "utf-8", (err, notes) => {
      
        });
    });
};