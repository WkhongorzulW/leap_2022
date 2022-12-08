// Ex-08
let removeArrayElement = [2, 1, 6, 5, 8, 6];
removeArrayElement.splice(2, 1);
removeArrayElement.pop();
console.log(removeArrayElement);


// Ex-06
let queueLine = ["Bat", "Dorj", "Puntsag", "Gotov", "Bayaraa", "Bold", "Navchaa", "Gonchigsumlai", "Tsetsgee", "Nergui", "Balibiigombo", "Baatar"];
let newQueueLine = queueLine.slice(0, 10);
console.log(newQueueLine);


// Ex-05
let parameterizeStr = ["This", "Is", "Where", "I", "Begin"];
function p(x){
    console.log((x.join("-")).toLowerCase());
}
p(parameterizeStr);


// Ex-02
let array = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(array);

console.log(array.sort());
console.log(array.reverse());
console.log(array.shift());

