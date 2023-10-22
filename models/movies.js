var orm = require ("../config/ORM.js"); 

var movie = {
    all: function (cb){
        orm.all("movies", function(res) {
            cb(res); 
        }); 
    }, 

    create: function(cols, vals, cb) {
        orm.create("movies", cols, valus, function(res){
            cb(res); 
        });
    }, 
    update: function(objColVals, condition, cb) {
        orm.update("movies", objColVals, condition, function(res){
            cb(res); 
        }); 
    }, 
    delete: function(condition, cb) {
        orm.delete("movies", condition, function(res){
            cb(res); 
        }); 
    }
}; 

module.exports= movies; 