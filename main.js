
document.getElementById("btn").addEventListener("click",() => {


    let url = "https://wind-bow.gomix.me/twitch-api" ;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);
            console.log(result);
        }
    };
    xhttp.send();

});

