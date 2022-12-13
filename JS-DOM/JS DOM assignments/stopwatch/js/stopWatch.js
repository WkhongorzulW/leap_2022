let startButton = document.getElementById("startButton");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let millisecond = document.getElementById("millisecond");

startButton.addEventListener("click", runTimerInterval);

function runTimerInterval(){
    window.setInterval(startInterval, 1000);
}

function startInterval(){
    let now = new Date();
    hour.innerHTML = `${now.getHours()}:`;
    minute.innerHTML = `${now.getMinutes()}:`;
    second.innerHTML = `${now.getSeconds()}:`;
    millisecond.innerHTML = `${now.getMilliseconds()}`;
}