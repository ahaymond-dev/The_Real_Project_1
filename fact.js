var TRAIL_API_KEY = "aa54eadca0mshb4a43463e57c59fp16e59ajsn96c8e65823c1";
// via curl -i -X POST "https://trefle.io/api/auth/claim?token=cm5tSlQ5cytLeVJUY2VMV2NVSUVNUT09&origin=http://localhost:8001"

function callTrailsAPI(lat, lng) {
    // var proxy_url = "https://cors-anywhere.herokuapp.com/";

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=" + lat + "&lon=" + lng + "&radius=15",
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
                    // var img = $('<img id="">'); 
                    // $(document.createElement('img'))
                    // img.attr('src', response.data[i].thumbnail);
                    var imgTag = '<img src="' + response.data[i].thumbnail +'">';
                    updatedText += imgTag + "<br>" + response.data[i].description + "<br>";
                    // img.prependTo('#imageHere');
                    // const trailImage = $("img");
                    // trailImage.attr("src",response.data[i].thumbnail);
                    // updatedText += response.data[i].thumbnail + "<br>";
                    // $("<imageHere>").text(updatedText);
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