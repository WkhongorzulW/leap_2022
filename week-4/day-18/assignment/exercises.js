// Ex-01 JS Methods

// // Ex-01

// const shoppingCard = ["Milk", "Coffee", "Tea", "Honey"];
// console.log(shoppingCard);

// if(!shoppingCard.includes("Meat")){
//     shoppingCard.unshift("Meat");
//     console.log(shoppingCard);
// }

// if(!shoppingCard.includes("Sugar")){
//     shoppingCard.push("Sugar");
//     console.log(shoppingCard);
// }

// console.log(shoppingCard.indexOf("Honey"));
// let allergicToHoney = prompt("Allergic to honey?");
// if(allergicToHoney == "yes"){
//     shoppingCard.splice(4, 1);
//     console.log(shoppingCard);
// }

// console.log(shoppingCard.indexOf("Tea"));
// shoppingCard.splice(3, 1, "Green Tea");
// console.log(shoppingCard);


// // Ex-02

// let array = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(array);
 
// console.log(array.sort());
// console.log(array.reverse());
// array.shift();
// console.log(array);
// console.log(array.length);
// array.splice(2, 2);
// console.log(array);
// array.pop();
// console.log(array);
// array.splice(0);
// console.log(array);


// Ex-03

let carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
];
// let input = (prompt("Give first letter of car brand :")).toUpperCase();

// function brands(b){
//     for(let i = 0; i < carBrands.length; i++){
//         if(carBrands[i][0][0] === b){
//             console.log(`brand:  ${carBrands[i][0]}`);
//             console.log(`country:  ${carBrands[i][1]}`);
//             console.log(`year:  ${carBrands[i][2]}`);
//         }
//     }
// }
// brands(input);


// let state = (prompt("Give the state of car state :"));
// function cars(x){
//     for(let i = 0; i < carBrands.length; i++){
//         if(carBrands[i][1] == x){
//             console.log(carBrands[i]);
//         }
//     }
// }
// cars(state);






// // Ex-04
// let number1 = prompt("Give me your first number");
// let number2 = prompt("Give me your second number");
// let number3 = prompt("Give me your third number");
// let number4 = prompt("Give me your fourth number");
// let numbers = [number1, number2, number3, number4];
// numbers = numbers.reverse();
// console.log(numbers);


