//A
const express = require("express"); 
const path = require("path"); 


const PORT= process.env.PORT || 8080; 

// const router = express.Router(); 

var app = express(); 
//Port for the application

//Using express.static middleware to serve static content for the app from the "assets" folder
app.use(express.static("public")); 

//Sets up Express app to handle data parsing
app.use(express.urlencoded({extended: true})); 

const routes = require("./controllers/controller.js"); 

app.use(routes); 


// app.use('/', router); 

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname+ "/index.html")); 
  console.log("grabbing html")
}); 




//Start the server 
app.listen(PORT, function() {
  //Log (server side) when the server is started

  console.log("Server listening on port: " + PORT)
}); 
