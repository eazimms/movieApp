//A
const express = require("express"); 
const mysql = require("mysql"); 
const path = require("path"); 
const router = express.Router(); 

const app= express(); 
//Port for the application
var PORT= process.env.PORT || 8080; 
//Using express.static middleware to serve static content for the app from the "assets" folder
app.use(express.static("public")); 

//Sets up Express app to handle data parsing
app.use(express.urlencoded({extended: true})); 

// app.use(express.json); 
// //Mysql stuff, will update later, need to create schema for this as well
// var connection= mysql.createConnection({
//   host: "localhost", 
//   port: 3306, 
//   user: "root", 
//   password: "R0senrot!", 
//   database: ""
// }); 

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname+ "/index.html")); 
  console.log("grabbing html")
}); 



// connection.connect(function(err) {
//   if(err) {
//     console.error("error connecting: " + err.stack); 
//     return; 
//   }
//   console.log("Connected as id: " + connection.threadId); 
// })

app.use('/', router); 

//Start the server 
app.listen(PORT, function() {
  //Log (server side) when the server is started

  console.log("Server listening on port: " + PORT)
}); 
