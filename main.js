
document.getElementById("btn").addEventListener("click",() => {

    //example for savijs twitch channel id
    let urlTest = "https://wind-bow.glitch.me/twitch-api/streams/43131877";
    
    // to get twitch channel id use https://wind-bow.glitch.me/twitch-api/channels/<channel name>
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlTest, true);
    xhttp.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);
            //console.log(result);
            // displays message if stream is ofline
            if (result.stream == null) {
                console.log("test worked");
            } else {
                console.log("user is online");
            }
        }
    };
    xhttp.send();

});

// to do list //
//1) add 4 more streams to be test examples
//2) add links to actual twitch page
//3) add twitch logo for each channel etc

