// //simple as - 1
// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0]);
// console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
// console.log(itCompanies[itCompanies.length - 1]);

// console.log("-----");
// for(let i = 0; i < itCompanies.length; i++){
//     console.log(itCompanies[i]);
// }

// console.log("-----");
// for(let a = 0; a < itCompanies.length; a++){
//     console.log(itCompanies[a].toUpperCase());
// }

// console.log("-----");
// console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, ${itCompanies[6]} зэрэг мэдээллийн технологийн томоохон компаниуд.`)


//simple as - 2
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];


// let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0]);
// console.log(itCompanies[Math.ceil(itCompanies.length / 2)]);
// console.log(itCompanies[itCompanies.length - 1]);

// console.log("-----");
// for(let i = 0; i < itCompanies.length; i++){
//     console.log(itCompanies[i]);
// }

// console.log("-----");
// for(let a = 0; a < itCompanies.length; a++){
//     console.log(itCompanies[a].toUpperCase());
// }

// console.log("-----");
// console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, ${itCompanies[6]} зэрэг мэдээллийн технологийн томоохон компаниуд.`);

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

