const express = require("express"); 

const app = express(); 
const PORT = process.env.port || 8080; 

const db = require("./models"); 

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

app.use(express.static("public")); 

//Routes

require("./routes/api-routes")(app); 
require("./routes/html-routes")(app); 

//Syncing sequelize modesl then starting express app 

db.sequelize.sync({ force: true}).then(function(){
  app.listen(PORT, function() {
    console.log("app listening on PORT " + PORT); 
  }); 
}); 