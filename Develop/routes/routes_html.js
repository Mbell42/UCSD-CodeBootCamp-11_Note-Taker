// Grabbing Dependencies
const path = require("path");

// Routing
module.exports = (app) => {
    // HTML Get routes
    app.get("/notes/", (request,result) => {
        result.sendFile(path.join(_dirname, "../public/index.html"));
    });

    app.get("*", (request, result) => {
    result.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
