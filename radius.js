Austen Haymond 8:26 PM
(function () {
            navigator.geolocation.getCurrentPosition(function (position) {
       console.log(position.coords.latitude);
       console.log(position.coords.longitude);
       
        const queryUrl = "https://us1.locationiq.com/v1/reverse.php?key=7f4e3e6f4c7876&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&format=json";
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://us1.locationiq.com/v1/nearby.php?key=YOUR_PRIVATE_TOKEN&lat=" + postion.coords.latitude + "&lon=" + position.coords.longitude + "&tag=restaurant&radius=300&format=json",
                "method": "GET"
              }
              
              $.ajax(settings).done(function (response) {
                console.log(response);
              });
    
        
        });
        
       
    },
    function (error) {
        console.log("The Locator was denied. :(")
    });



var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://us1.locationiq.com/v1/nearby.php?key=dc3a3751fb06f9&lat=" + postion.coords.latitude + "&lon=" + position.coords.longitude + "&tag=restaurant&radius=300&format=json",
    "method": "GET"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
//create a onclick button that searches using the api//
$("#radiusButton").on("click", (e) => {
  e.preventDefault();
  $(".printRadius").empty();

})();