const express = require('express'); 

const router = express.Router(); 

const movies = require("../models/movies.js"); 




router.get("/", function(req, res){ 
    
    // res.sendFile("../public/index.html")
    movies.all(function(data){
        let mObject = {
            movData
        };
        console.log(mObject)
        res.render("index", mObject); 
    }); 
}); 

router.post("/api/movies", function(req, res){
    movies.create([
        "movie", "ourRating", "rottenTomatoesRating", "addedDate"
    ], [
        req.body.movie, req.bodyourRating, req.body.rottenTomatoesRating
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