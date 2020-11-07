/* #################################
 Filename: server.js
 Project: ELO Farmers Guild Site
 Date: 5/14/2020
 ################################### */

 var express = require("express");
 var exphbs = require("express-handlebars");
 var bodyParser = require("body-parser");
 //var mysql = require("./dbcon.js");
 
 
 var app = express();
 
 var port = process.env.PORT || 3000;
 
 app.engine("handlebars", exphbs({ defaultLayout: "main" }));
 app.set("view engine", "handlebars");
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.static("public"));

 // Catch for Home Page
 app.get("/", function (req, res, next) {
    res.status(200).render("homePage");
}); 
  
  
// Catch for All
app.get("*", function (req, res, next) {
     res.status(200).render("404");
});

// Port Listener
app.listen(port, function () {
    console.log("== Server is listening on port", port);
});