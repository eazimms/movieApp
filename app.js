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

  
  

  

  
  // var content=`<div class="card" id="movieCard" style="width: 18rem;">
  //     <img src="..." class="card-img-top" alt="..." id="movieImg">
  //     <div class="card-body">
  //       <h5 class="card-title" id="movieTitle">Movie Title</h5>
  //       <p class="card-text" id="movieSummary">Movie Summary</p>
  //       <p class="card-text" id="ourRating">A</p>
  //       <a href="#" class="btn btn-primary">Go somewhere</a>
  //     </div>
  //   </div>`

    

    // $("#cardContainer").append(content);



//event trigger for adding the movie. Need to change Css to make inline. 
$("#postMovieBtn").on("click", function(event){
  event.preventDefault(); 
  let movie =$("#movieName").val().trim(); 
  let ourRating = $("#movieRating").val(); 
  const queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=5cace7de";
  
  
  $.ajax({
    type: "GET",
    url: queryURL,
    success: function (response) {
      //Okay this is working and grabbing the proper information. Need to add our information and also push into a card. 
      
      // console.log(movie)
      console.log(response)
      // console.log(ourRating)

      let movieData = {
        title: response.Title,
        poster:  response.Poster,
        plot: response.Plot,
        rating: response.Ratings[1].Value,
        oRating: ourRating 


      }

      createCard(movieData); 

      

      

      

      
      
      
      
    }
       
  })
}); 

function createCard(movieData){
  let card= $('<div>').addClass("card").appendTo("#cardContainer");
  let cardBody = $('<div>').addClass("card-body").appendTo(card); 
  let bodyTitle =$('<h5>').text(movieData.title).appendTo(cardBody).addClass("card-title"); 
  let cardImage = $('<img>').attr({src: movieData.poster}).appendTo(cardBody).addClass("card-img");
  let bodyText = $('<p>').text(movieData.plot).appendTo(cardBody).addClass("card-text"); 
  let ourRatingTxt= $('<p>').text("Our Rating: " + movieData.oRating).appendTo(cardBody).addClass("card-text"); 

  //This is working properly now, need to adjust CSS elements to properly fit within the card body but on the right track. 
  

  console.log(movieData.poster); 
  console.log(movieData.plot);
  
}









