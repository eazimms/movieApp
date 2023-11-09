// const { post } = require("../../controllers/controller");

$(document).ready(function(){
console.log("ready!")
}); 

//Making the post movie button work now. Here we'll need to make sure the button is firing with the console.log() function
//Then we need to post a new card with the information from the modal that we've just closed out. 
//Need to grab the value from the 'movieName' id and the 'selectedRating' id and add those into the card. 
//Probably best to add a new function to this and call that function when clicking the button. 
//Probably need to add an ORM to save all this data. 


//Function to add movie, need to add methodolgy for grabbing the movie info, and posting within the card but adding the card is working. 
//Need to change the Css to display in line as well. 

// let movData = {
//   title:"",
//   oRating: "",
  

  
// }



//event trigger for adding the movie. Need to change Css to make inline. 
$("#postMovieBtn").on("click", function(event, movData){
  event.preventDefault(); 
  let movie =$("#movieName").val().trim(); 
  let oRating = $("#movieRating").val().trim(); 
  let addDate = "1"
  
  
  //Get request
  $.ajax({
    type: "GET",
    url: "https://www.omdbapi.com/?t=" + movie + "&apikey=5cace7de",
    success: function (response) {
      //Okay this is working and grabbing the proper information. Need to add our information and also push into a card.   

      let movData = {
        title: response.Title,
        poster:  response.Poster,
        plot: response.Plot,
        rating: response.Ratings[1].Value,
        ourRating: oRating,
        // addedDate: "1"


      }
      

      
      createCard(movData); 
      console.log(movData);
      posMovie(movData); 
      
    }
    
  })

  
  
})

function posMovie(movData){
  $.ajax("/api/movies", {
    type: "POST",
    data: movData
    
  }); 
  console.log(movData.title); 
  console.log(movData.ourRating);
  console.log(movData.plot); 
  console.log(movData.rating); 
  console.log('getting here!'); 
}



function createCard(movData){
  let card= $('<div>').addClass("card").appendTo("#cardGroup");
  let cardBody = $('<div>').addClass("card-body").appendTo(card); 
  let bodyTitle =$('<h5>').text(movData.title).appendTo(cardBody).addClass("card-title"); 
  let cardImage = $('<img>').attr({src: movData.poster}).appendTo(cardBody).addClass("card-img");
  // let bodyText = $('<p>').text(movieData.plot).appendTo(cardBody).addClass("card-text"); 
  //Removing the plot from the initial card as I hate CSS and text keeps overflowing
  let bodyText=$('<p>').text("Rotten Tomatoes Score: " +movData.rating).appendTo(cardBody).addClass('card-text'); 
  //Adding Rotten tomatoes score to the card. 
  let ourRatingTxt= $('<p>').text("Our Rating: " + movData.oRating).appendTo(cardBody).addClass("card-text"); 

  //This is working properly now, need to adjust CSS elements to properly fit within the card body but on the right track. 


  
  
}
