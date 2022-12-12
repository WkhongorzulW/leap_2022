console.log("events");

let myButton = document.getElementById("myButton");
console.log(myButton);
let myBtnEvent = "white";
function changeBgColorGreen(){
    if(myBtnEvent === "white"){
        myBtnEvent = "green"
        myButton.style = "background-color: green";
    }

    else{
        myBtnEvent = "white";
        myButton.style = "background-color: white";
    }
} 


//myButton.addEventListener("click", changeBgColorGreen);


let arrowFunc = () => {
    
}

myButton.addEventListener("click", () => {
    myButton.style = "background-color: red;"
});

let registerButton = document.querySelector("#register");
registerButton.ariaDisabled;

document.querySelector("#changePcolor").style = "margin-top: 50px";
let btn = document.querySelector("#changePcolor");
function changePcolor(){
    document.querySelectorAll("p")[0].style = "background-color: red";
    document.querySelectorAll("p")[1].style = "background-color: yellow";
}
btn.addEventListener("click", changePcolor);