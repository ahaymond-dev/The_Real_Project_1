function mapScroll() {
  var mapBtn = document.getElementById("map");
  mapBtn.scrollIntoView();
}

function factScroll() {
  var factBtn = document.getElementById("facts");
  factBtn.scrollIntoView();
}

function jokeScroll() {
  var jokeBtn = document.getElementById("joke");
  jokeBtn.scrollIntoView();
}

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
          $("#dad-joke-here").append(results.joke);

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
              var img = $("<img>")
              img.attr("src", response.data[index].images.original.url)
              $("#dad-joke-here").append(img)
            })
        });
    });
