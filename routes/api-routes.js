const db = require("../models"); 

module.exports = function(app) {
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost){
        res.json(dbPost);
      });
  });

  app.get("/api/posts/category/:category", function(req, res){
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbPost){
      res.json(dbPost); 
    }); 
  }); 

  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost){
        res.json(dbPost); 
      }); 
  }); 

  //Post route for new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body); 
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category 
    })
      .then(function(dbPost){
        res.json(dbPost); 
      }); 
  }); 

  //Delete Route for posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        req.json(dbPost); 
      }); 
  }); 

  //Update route for posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body, 
      {
        where: {
          id: req.body.id
        }
      })
        .then(function(dbPost){
          res.json(dbPost);
        }); 
  }); 
}; 