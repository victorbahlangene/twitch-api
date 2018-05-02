
// show all , both online and offline
//freecodecamp
document.getElementById("all").addEventListener("click",() => {

    let url = "https://wind-bow.glitch.me/twitch-api/channels/freecodecamp"
    
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);
            
            let freeCodeCampBlock = document.getElementById("demo");
            freeCodeCampBlock.innerHTML = '<img src ="https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png"/> &emsp;&emsp;&emsp;&emsp; '
                + '<a target = "blank" href="https://www.twitch.tv/freecodecamp">Freecodecamp </a>'
               
        }
    };
    xhttp.send();

});

// adding a second channel
//ign
document.getElementById("all").addEventListener("click", () => {

    let url = "https://wind-bow.glitch.me/twitch-api/channels/ign"

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);

            let ignBlock = document.getElementById("demo1");
            ignBlock.innerHTML = '<img src ="https://static-cdn.jtvnw.net/jtv_user_pictures/d9338464d5fb0819-profile_banner-480.png"/> &emsp;&emsp;&emsp;&emsp; '
                + '<a target = "blank" href="https://www.twitch.tv/ign"><b>Ign</b></a>'
            
        }
    };
    xhttp.send();

});

//adding  3rd channel
//kibler
document.getElementById("all").addEventListener("click", () => {

    let url = "https://wind-bow.glitch.me/twitch-api/channels/bmkibler"

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);

            let hearthstoneBlock = document.getElementById("demo2");
            hearthstoneBlock.innerHTML = '<img src ="https://static-cdn.jtvnw.net/jtv_user_pictures/bmkibler-profile_banner-d7558ef2eebf147d-480.png"/> &emsp;&emsp;&emsp;&emsp; '
                + '<a target = "blank" href="https://www.twitch.tv/bmkibler"><b>Kibler</b></a>'
            
        }
    };
    xhttp.send();

});
//* ** */

// show only online streamers //
//free code camp//
document.getElementById("online").addEventListener("click",() =>{
    
    let url = "https://wind-bow.glitch.me/twitch-api/streams/79776140"

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);

            if (result.stream != null) {
            let freeCodeCampBlock = document.getElementById("demo");
            freeCodeCampBlock.innerHTML = '<img src ="https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png"/> &emsp;&emsp;&emsp;&emsp; '
                + '<a target = "blank" href="https://www.twitch.tv/freecodecamp">Freecodecamp </a>'
                + '&emsp;&emsp; <i>ONLINE</i>'
                + '<br/>'
                + 'Viewers :'+result.stream.viewers
                + 'Total followers :'+result.channel.followers
            } else {
                let freeCodeCampBlock = document.getElementById("demo");
                freeCodeCampBlock.innerHTML = "";
            }
        }
    };
    xhttp.send();
});

// ign //
document.getElementById("online").addEventListener("click", () => {

    let url = "https://wind-bow.glitch.me/twitch-api/streams/25015653"

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);

            if (result.stream != null) {
                let ignBlock = document.getElementById("demo1");
                ign.innerHTML = '<img src ="https://static-cdn.jtvnw.net/jtv_user_pictures/d9338464d5fb0819-profile_banner-480.png"/> &emsp;&emsp;&emsp;&emsp; '
                    + '<a target = "blank" href="https://www.twitch.tv/ign">Ign </a>'
                    + '&emsp;&emsp; <i>ONLINE</i>'
                    + '<br/>'
                    + 'Viewers :' + result.stream.viewers
                    + 'Total followers :' + result.channel.followers
            } else {
                let freeCodeCampBlock = document.getElementById("demo1");
                freeCodeCampBlock.innerHTML = "";
            }
        }
    };
    xhttp.send();
});

// kibler
document.getElementById("online").addEventListener("click", () => {

    let url = "https://wind-bow.glitch.me/twitch-api/streams/25871845"

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);

            if (result.stream != null) {
                let hearthstoneBlock = document.getElementById("demo2");
                hearthstoneBlock.innerHTML = '<img src ="https://static-cdn.jtvnw.net/jtv_user_pictures/bmkibler-profile_banner-d7558ef2eebf147d-480.png"/> &emsp;&emsp;&emsp;&emsp; '
                    + '<a target = "blank" href="https://www.twitch.tv/bmkibler"><b>Kibler</b></a>'
                    + '&emsp;&emsp; <i>ONLINE</i>'
                    + '<br/>'
                    + 'Viewers :' + result.stream.viewers
                    + 'Total followers :' + result.channel.followers
            } else {
                let freeCodeCampBlock = document.getElementById("demo2");
                freeCodeCampBlock.innerHTML = "";
            }
        }
    };
    xhttp.send();
});

//* ** */

//show offline streamers //
//freecodecamp
document.getElementById("offline").addEventListener("click", () => {

    let url = "https://wind-bow.glitch.me/twitch-api/streams/79776140"

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);

            if (result.stream == null) {
                let freeCodeCampBlock = document.getElementById("demo");
                freeCodeCampBlock.innerHTML = '<img src ="https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png"/> &emsp;&emsp;&emsp;&emsp; '
                    + '<a target = "blank" href="https://www.twitch.tv/freecodecamp">Freecodecamp </a>'
                    + '&emsp;&emsp; <i>OFFLİNE</i>'
            } else {
                let freeCodeCampBlock = document.getElementById("demo");
                freeCodeCampBlock.innerHTML = "";
            }
        }
    };
    xhttp.send();
});

// ign //
document.getElementById("offline").addEventListener("click", () => {

    let url = "https://wind-bow.glitch.me/twitch-api/streams/25015653"

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);

            if (result.stream == null) {
                let ignBlock = document.getElementById("demo1");
                ignBlock.innerHTML = '<img src ="https://static-cdn.jtvnw.net/jtv_user_pictures/d9338464d5fb0819-profile_banner-480.png"/> &emsp;&emsp;&emsp;&emsp; '
                    + '<a target = "blank" href="https://www.twitch.tv/ign">Ign </a>'
                    + '&emsp;&emsp; <i>OFFLİNE</i>'
            } else {
                let freeCodeCampBlock = document.getElementById("demo1");
                freeCodeCampBlock.innerHTML = "";
            }
        }
    };
    xhttp.send();
});

// kibler //
document.getElementById("offline").addEventListener("click", () => {

    let url = "https://wind-bow.glitch.me/twitch-api/streams/25871845"

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
        if (this.status == 200) {
            let result = JSON.parse(this.responseText);

            if (result.stream == null) {
                let hearthstoneBlock = document.getElementById("demo2");
                hearthstoneBlock.innerHTML = '<img src ="https://static-cdn.jtvnw.net/jtv_user_pictures/bmkibler-profile_banner-d7558ef2eebf147d-480.png"/> &emsp;&emsp;&emsp;&emsp; '
                    + '<a target = "blank" href="https://www.twitch.tv/bmkibler"><b>Kibler</b></a>'
                    + '&emsp;&emsp; <i>OFFLİNE</i>'
            } else {
                let freeCodeCampBlock = document.getElementById("demo2");
                freeCodeCampBlock.innerHTML = "";
            }
        }
    };
    xhttp.send();
});



