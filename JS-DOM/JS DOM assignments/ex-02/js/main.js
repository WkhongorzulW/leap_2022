//option remove
let myButton = document.querySelector("input");

let element = document.querySelector("option");
console.log(element);

console.log(myButton);

function removing(){
    element.remove();
}
myButton.addEventListener("click", removing);


//random color generator
