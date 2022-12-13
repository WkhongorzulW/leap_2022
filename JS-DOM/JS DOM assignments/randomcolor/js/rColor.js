const button = document.querySelector("#rColorBtn");
button.style = "color: green";
let body = document.querySelector("body");
let color = "white";
button.addEventListener("click", () => {
    if(color == "white"){
        color = "green";
        body.style = "background-color: green"
        button.style = "color: red";
    } else if(color == "green"){
        color = "red";
        body.style = "background-color: red";
        button.style = "color: lightblue";
    } else if(color == "red"){
        color = "lightblue";
        body.style = "background-color: lightblue";
        button.style = "color: pink";
    } else if(color == "lightblue"){
        color = "pink";
        body.style = "background-color: pink";
        button.style = "color: yellow";
    } else if(color == "pink"){
        color = "yellow";
        body.style = "background-color: yellow";
        button.style = "color: salmon";
    } else if(color == "yellow"){
        color = "salmon";
        body.style = "background-color: salmon";
        button.style = "color: palevioletred";
    } else if(color == "salmon"){
        color = "palevioletred";
        body.style = "background-color: palevioletred";
        button.style = "color: voilet";
    } else if(color == "palevioletred"){
        color = "lightgreen";
        body.style = "background-color: lightgreen";
        button.style = "color: gold";
    } else if(color == "lightgreen"){
        color = "gold";
        body.style = "background-color: gold";
        button.style = "color: black";
    } else if(color == "gold"){
        color = "white";
        body.style = "background-color: white";
        button.style = "color: green";
    }
});