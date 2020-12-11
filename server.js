// Express server

// Deps
let express = require('express');
let exphbs = require("express-handlebars");

// Import routes
let router = require("./controllers/burgers_controller");

// Set port
let PORT = process.env.PORT || 8080;

// Instantiate express
let app = express();

// Serve static content
app.use(express.static("public"));

// Parse as JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set Express to use routes
app.use(router);

// Set up server to listen on port
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });