// // 
// function pow(number, exponent){
//     let multiply = 1;
//     for(let i = 1; i <= exponent; i++){
//         multiply = multiply * number;
//     }
//     return multiply;
// }
// let result = pow(2, 3);
// console.log(result);


// // Find min
// function findMin(x, y){
//     if(x < y){
//         console.log(x);
//         return true;
//     }
//     else{
//         console.log(y);
//         return false;
//     }
// }
// let num1 = Number(prompt("Give a number for x"));
// let num2 = Number(prompt("Give a number for y"));

// console.log(findMin(num1, num2));

// // Print Array
// function printArray(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// printArray(arr);

// // Find Array Max
// let findArrayMax = function(array){
//     let max = -1;
//     for(let i = 0; i < array.length; i++){
//         if(max <= array[i]){
//             max = array[i];
//         }
//     }
//     return max;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(findArrayMax(arr));

// // Find Array Avarage
// let findArrayAvarage = (array) => {
//     let sum = 0;
//     for(let i = 0; i < array[i]; i++){
//         sum = sum + array[i];
//     }
//     const avarage = sum / array.length;
//     return avarage;
// }
// let myArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(findArrayAvarage(myArray));


// 
function findOntsDumd(points){
    if(points < 60){
        return "Very bad";
    } else if(points >= 60 && points < 70){
        return "Enough";
    } else if(points >= 70 && points < 80){
        return "Avarage";
    } else if(points >= 80 && points < 90){
        return "Good";
    } else if(points >= 90 && points <= 100){
        return "Excellent";
    } else{
        return "Please give me points between 0 and 100";
    }
}
let inputPoints = Number(prompt("Give me your point"));
let inputName = prompt("Give me your name");
let pointResult = findOntsDumd(inputPoints);

console.log(`${inputName} - ${inputPoints} - ${pointResult}`);