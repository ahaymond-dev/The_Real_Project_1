// var apiKey = "2E49A1A1-9E9F-3DVFM5c1lKalRzTlc5QmdocExDT3gwQT0912-8821-10F086F6D827";

// $("#search").val()
// ​
// $("button").on("click", function(event){
//     event.preventDefault();
//     var city = $("#search").val()
// ​
//     var queryURL = "http://quickstats.nass.usda.gov/api/get_param_values/?key=apikey&param={parameter}" + city + "&APPID=" + apiKey;
//     console.log(queryURL)
    
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         console.log(response)
//         var temp = response;
        
//         var tempDiv = $("state_name_div").text(`Temp: ${fTemp}˚F`);
    
//         var boxDiv = $("#box");
//         $("#box").append(tempDiv)
//     })
// })

// import "http://localhost:8001/jquery-3.4.1.js"

var TRAIL_API_KEY = "aa54eadca0mshb4a43463e57c59fp16e59ajsn96c8e65823c1";
// via curl -i -X POST "https://trefle.io/api/auth/claim?token=cm5tSlQ5cytLeVJUY2VMV2NVSUVNUT09&origin=http://localhost:8001"

function callTrailsAPI(lat, lng) {
    // var proxy_url = "https://cors-anywhere.herokuapp.com/";

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=" + lat + "&lon=" + lng + "&radius=15",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
            "x-rapidapi-key": TRAIL_API_KEY
        },
        // Work with the response
        success: function(response) {
            console.log("Trails API success!");
            console.log(response);
            let updatedText = "";
            if (response.data) {
                for (let i = 0; i < 3 && i < response.data.length; i++) {
                    updatedText += response.data[i].name + "<br>";
                    const trailImage = $("<img>");
                    trailImage.attr("src",response.data[i].thumbnail);
                }
            }
            $("#trailResponse").html(updatedText);
        },

        error: function(response) {
            console.log("Trails API error!");
            console.log(response);
        }
    });
}

$(document).ready(function(){


})