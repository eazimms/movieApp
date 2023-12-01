$(document).ready(function(){
  const cardContainer = $(".cardContainer"); 
  const something = $("#something"); 

  $(document).on("click", "button.delete", handlePostDelete()); 
  $(document).on("click", "button.edit", handlePostEdit()); 
  something.on("change", handleSomethingChange());
  let posts; 

  function getPosts(category) {
    let categoryStrings = category || ""; 
    if (categoryStrings) {
      categoryStrings = "/category/" + categoryStrings;
    }
    $.get("/api/posts" = categoryStrings, function(data){
      console.log("Posts" + data); 
      posts = data; 
      if (!posts || !posts.length) {
        displayEmpty(); 
      } else {
        initializeRows(); 
      }
    }); 
  }

  function deletePost(id) {
    $.ajax({
      method: "DELETE", 
      url: "/api/posts/" + id
    })
    .then(function() {
      getPosts(something.val()); 
    }); 
  }

  getPosts(); 

  function initializeRows(){
    cardContainer.emtpy(); 
    let postsToAdd = []; 
    for (var i =0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i])); 
    }
    cardContainer.append(postsToAdd); 
  }
  //need to add divs for: poster, plot, etc. 
  createNewPost(post =>{
    const newPostCard = $("<div>"); 
    newPostCard.addClass("card"); 
    const newPostCardHeading = $("<div>"); 
    newPostCard.addClass("card-header"); 
    const deleteBtn = $("<button"); 
    deleteBtn.text("X"); 
    deleteBtn.addClass("delete btn btn-danger"); 
    const editBtn =$("<button>"); 
    editBtn.addClass("edit btn btn-default"); 
    const newPostTtile = $("<h2>"); 
    const newPostDate = $("<small>"); 
    const newPostCategory = $("<h5>"); 
    newPostCategory.text(post.category); 
    newPostCategory.css({
      float: "right", 

    }); 
    const newPostCardBody = $("<div>"); 
    newPostCardBody.addClass("card-body"); 
    newPostTitle.text(post.title + " ");
    newPostCardBody.text(post.body); 
    const formattedDate = new Date(post.createdAt); 
    formattedDate = moment(formattedDate).format("MMMM Do YYYY"); 
    newPostDate.text(formattedDate); 
    newPostTitle.append(newPostDate); 
    newPostCardHeading.append(deleteBtn); 
    newPostCardHeading.append(editBtn); 
    newPostCardHeading.append(newPostTitle); 
    newPostCardHeading.append(newPostCategory); 
    newPostCardBody.append(newPostCardBody); 
    newPostCardBody.append(newPostCardHeading); 
    newPostCard.append(newPostCardHeading); 
    newPostCard.append(newPostCardBody); 
    newPostCard.data("post", post); 
    return newPostCard; 
  }); 

  function hanldePostDelete() {
    let currentPost = $(this)
    .parent()
    .parent()
    .data("post")
    deletePost(currentPost.id);
    window.location.href = "/cms?post_id=" + currentPost.id;  
  }

  function displayEmpty() {
    cardContainer.empty(); 
    const message = $("<h2>"); 
    cardContainer.append(message); 
  }

  function handleCategoryChange() {
    let newPostCategory = $(this).val(); 
    getPosts(newPostCategory); 
  }



  function getNewMovie(post) {
    $("#postMovieBtn").on("click", function(event){
      let movie = $("#movieName").val().trim();
      let oRating =$("#movieRating").val().trim();
      let formattedDate = new Date(post.createdAt); 
      formattedDate = moment(formattedDate).format("MMMM do YYYY"); 

    })
  }





//event trigger for adding the movie. Need to change Css to make inline. 
$("#postMovieBtn").on("click", function(event, movData){
  event.preventDefault(); 
  let movie =$("#movieName").val().trim(); 
  let oRating = $("#movieRating").val().trim(); 
  let addDate = "1"
  
  
  //Fetch data from OMDb database. 
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



// function createCard(movData){
//   let card= $('<div>').addClass("card").appendTo("#cardGroup");
//   let cardBody = $('<div>').addClass("card-body").appendTo(card); 
//   let bodyTitle =$('<h5>').text(movData.title).appendTo(cardBody).addClass("card-title"); 
//   let cardImage = $('<img>').attr({src: movData.poster}).appendTo(cardBody).addClass("card-img");
//   // let bodyText = $('<p>').text(movieData.plot).appendTo(cardBody).addClass("card-text"); 
//   //Removing the plot from the initial card as I hate CSS and text keeps overflowing
//   let bodyText=$('<p>').text("Rotten Tomatoes Score: " +movData.rating).appendTo(cardBody).addClass('card-text'); 
//   //Adding Rotten tomatoes score to the card. 
//   let ourRatingTxt= $('<p>').text("Our Rating: " + movData.ourRating).appendTo(cardBody).addClass("card-text"); 

//   //This is working properly now, need to adjust CSS elements to properly fit within the card body but on the right track. 


  
  
// }
}); 
