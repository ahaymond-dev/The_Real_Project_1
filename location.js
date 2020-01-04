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
        });
        

    
    },
    function (error) {
        console.log("The Locator was denied. :(")
    });
    })();
