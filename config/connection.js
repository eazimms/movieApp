const mysql = require('mysql');

app.use(express.json); 
//Mysql stuff, will update later, need to create schema for this as well
const connection= mysql.createConnection({
  host: "localhost", 
  port: 3306, 
  user: "root", 
  password: "!", 
  database: "movies_db"
}); 




connection.connect(function(err) {
   if(err) {
     console.error("error connecting: " + err.stack); 
     return; 
  }
   console.log("Connected as id: " + connection.threadId); 
}); 

module.exports = connection; 