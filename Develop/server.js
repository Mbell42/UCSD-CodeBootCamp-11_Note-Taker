// Grabbing Dependencies
const express = require("express");

// Setting up Express
const app = express();

// Setting up initial port
const PORT = process.env.PORT || 8080;

// Router - this points the server to route files in /develop/route
require("./routes/routes_api")(app);
require("./routes/routes_html")(app);



