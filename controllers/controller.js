const express = require('express'); 

const router = express.Router(); 

const movies = require("../models/movies.js"); 




router.get("/", function(req, res){ 
    
    // res.sendFile("../public/index.html")
    movies.all(function(data){
        let hbsObject = {
            movies: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject); 
    }); 
}); 

router.post("/api/movies", function(req, res){
    movies.create([
        // "id","movie", "ourRating", "plot", "rottenTomatoesRating", "addedDate"
        "title", "poster", "plot", "rating", "ourRating"
    ], [
        // req.body.title, req.body.ourRating, req.body.rottenTomatoesRating
        req.body.title, req.body.poster, req.body.plot, req.body.rating, req.body.ourRating, 
    ], function(result) {
        res.json({id: result.insertId});
    }
    
    );
}); 

router.put("/api/movies/:id", function(req, res) {
    let condition = "id = " + req.params.id; 
    console.log("condition", condition); 

    movies.update({

    }); 
});

router.delete("/api/movies/:id", function(req, res) {
    let condition = " id = " + req.params.id; 

    movies.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end(); 
        } else {
            res.status(200).end(); 
        }
    }); 
}); 

module.exports = router; 