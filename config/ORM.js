var connection = require ("./connection.js"); 

function printQuestionMarks(num) {
    let arr = []; 

    for (let i = 0; i < num; i++){
        arr.push("?"); 
    }

    return arr.toString(); 
}

//Helper function to cvonvert object key/valu pairs to SQL syntax

function objtoSql(ob){
    let arr= []; 

    //loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        let value = ob[key]; 

        //check to skp hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            //if string with spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'"; 

                arr.push(Lkey + "=" + value); 
            }

        }
    }
//translate array of strings to a simgle comma-seperated string
    return arr.toString(); 
}

let orm = {
    all: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";"; 
        connection.query(queryString, function(err, result){
            if (err) {
                throw err; 
            }
            cb(result); 
        })
    }, 
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table; 

        queryString += "( "; 
        queryString += cols.toString(); 
        queryString += ") "; 
        queryString += "VALUES ("; 
        queryString += printQuestionMarks(vals.length); 
        queryString += ") "; 
        
        console.log(queryString); 

        connection.query(queryString, vals, function(err, result) {
            if(err) {
                throw err; 
            }
            cb(result); 
        }); 
    }, 

    //objColVals would be
    update: function(table, objColVals, condition, cb){
        let queryString = "UPDATE " + table; 
        queryString+= " SET ";
        queryString += objtoSql(objColVals); 
        queryString += " WHERE "; 
        queryString += condition; 
        
        console.log(queryString); 
        connection.query(queryString, function(err, result){
            if (err) {
                throw err; 
            }
            cb(result); 
        }); 
    }, 

    delete: function(table, condition, cb) {
        let queryString = "DELETE FROM " + table; 
        queryString += " WHERE "; 
        queryString += condition; 

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err; 
            }
            cb(result); 
        })
    }
}; 

module.exports = orm; 


