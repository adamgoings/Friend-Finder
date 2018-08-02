//require Express, body-parser, and path
var express = require("express");
var bodyParser = require("body-parser")
var path = require("path");

var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//setting up the appropriate html and api routes

//require("/Users/adamgoings/Desktop/coding-information/FriendFinder/app/routing/apiRoutes.js")(app);
require("/Users/adamgoings/Desktop/coding-information/FriendFinder/app/routing/htmlRoutes.js")(app);

//start the listener

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
