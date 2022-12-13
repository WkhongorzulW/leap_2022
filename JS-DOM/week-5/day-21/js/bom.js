// console.log(window);
// window.alert("hello");

// window.open("https://google.com", "hello");

// window.confirm("hello");

// let result = window.confirm("Do you wanna to Quit");
// console.log(result);

// let message = result ? "Та ок товчийг дарлаа" : "Та гарах товчийг дарлаа";
// console.log(message);

let alertButton = document.getElementById("alertButton");
let cancelButton = document.getElementById("cancelButton");
let timeOutID;



alertButton.addEventListener("click", () => {
    timeOutID = setTimeout(alert, 3000, "setTimeOut Demo!");
});

cancelButton.addEventListener("click", () => {
    console.log(timeOutID);
    clearTimeout(timeOutID);
    console.log(timeOutID);
});

console.log(timeOutID);
setTimeout(() => {
    console.log("Time out is running");
}, 5000);

let counter = 0;

//setInterval(startInterval, 1000);


let timerButton = document.getElementById("timerButton");
timerButton.addEventListener("click", runTimerInterval);

function runTimerInterval(){
    window.setInterval(startInterval, 1000);
}

function startInterval(){
    let now = new Date();
    let myTimer = document.getElementById("myTimer");
    myTimer.innerHTML = now.getMilliseconds();
};