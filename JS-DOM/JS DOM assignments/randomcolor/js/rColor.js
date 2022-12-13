const button = document.querySelector("#rColorBtn");
let body = document.querySelector("body");
let colors = ["red", "blue", "pink", "skyblue", "white", "lihgtpink", "black", "green", "yellow", "lightblue", "purple", "pale", "salmon", "gold"];
console.log(colors[0]);
button.addEventListener("click", () => {
    for(let i = 0; i < colors.length; i++){
        body.style = `background-color: ${colors[i]}`
    }
}, 3000);