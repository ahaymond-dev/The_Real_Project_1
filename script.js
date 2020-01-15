// function for clicking joke button
$("#jokeBtn").on("click", function () {

  // variable for joke button
  const dadJoke = $(this).attr("dad-joke");

  // perform AJAX GET request for dad joke
  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com/",
    contentType: "application/json",
    dataType: "json",
    method: "GET"
  })

    // append results to <div> in index.html body
    .then(function (response) {
      const results = response;
      console.log(results)
      $("#dad-joke-here").empty()
      var div = $("<div class='jokeText'>")
      div.append(results.joke);
      $("#dad-joke-here").append(div);
    });
});

// function for clicking joke button
$("#jokeBtn").on("click", function () {

  // variables for gif 
  const dadGif = "dad"
  const queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dadGif + "&api_key=dc6zaTOxFJmzC&limit=25";

  // perform AJAX GET request for dad gif
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    // append results to <div> in index.html body
    .then(function (response) {
      console.log(response)
      var index = Math.floor(Math.random() * 25)
      var img = $("<img class='shadow mb-5 rounded mt-5'>")
      img.attr("src", response.data[index].images.original.url)
      $("#dad-gif-here").empty()
      $("#dad-gif-here").append(img)
    })
});