const path = require("path"); 

module.exports = function(app){
  
  //index route loads view.html
  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/movies.html")); 
  }); 

  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html")); 
  }); 

  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/movies.html")); 
  }); 
}; 