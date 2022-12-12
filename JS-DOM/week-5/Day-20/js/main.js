console.log("Day-20 DOM");

document.getElementById("helloText").innerHTML = "Hello World!";

document.getElementsByClassName("dummy")[0].innerHTML = "Hello dummy!";
document.getElementsByClassName("dummy")[1].innerHTML = "Hello dummy Header!";

console.log(document.getElementsByClassName("dummy")[0]);