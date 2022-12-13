let myShirt = document.getElementById("myShirt");
let orange = document.getElementById("orange");
let blue = document.getElementById("blue");
let green = document.getElementById("green");
let pink = document.getElementById("pink");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");


orange.addEventListener("click", () => {
    myShirt.style = "color: orange";
})

blue.addEventListener("click", () => {
    myShirt.style = "color: lightblue";
})

green.addEventListener("click", () => {
    myShirt.style = "color: lightgreen";
})

pink.addEventListener("click", () => {
    myShirt.style = "color: pink";
})

red.addEventListener("click", () => {
    myShirt.style = "color: red";
})

yellow.addEventListener("click", () => {
    myShirt.style = "color: yellow";
})