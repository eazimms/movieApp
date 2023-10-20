CREATE DATABASE movies_db;
USE movies_db;

CREATE TABLE movies
(
	id int NOT NULL AUTO_INCREMENT,
	movie TEXT NOT NULL,
	ourRating TEXT NOT NULL,
    rottenTomatoesRating TEXT NOT NULL, 
    addedDate VARCHAR(255), 
    
	PRIMARY KEY (id)
);