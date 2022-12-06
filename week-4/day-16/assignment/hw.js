// // Guess the number of array 
// let numbers = [1, 2, 3, 11, 12, 13, 21, 22, 23];
// let guess = Number(prompt("Give a random number"));

// function f1(x){
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] == x){
//             console.log(`${guess} is here!`)
//             return true;
//         }
//     }
//     for(let o = 0; o < numbers.length; o++){
//         if(numbers[o] != x){
//             console.log(`${guess} isn't here!`)
//             return false;
//         }
//     }
// }
// console.log(f1(guess));



// // Avarage of array
// let findOutAvarage = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// function f2(x){
//     for(; x < findOutAvarage.length; x++){
//         sum = sum + findOutAvarage[x];
//     }
//     console.log(sum / 2);
// }
// f2(0);



// // Sum of array
// let array1 = [1, 2, 3, 4, 5, 6];
// let sum1 = 0;
// function f3(x){
//     for(; x < array1.length; x++){
//         sum1 = sum1 + array1[x];
//     }
//     console.log(sum1);
// }
// f3(0);



// // Even or odd
// let guess = Number(prompt("Give a prime number from 0 to 50"));
// let temp = 0;
// function f4(x){
//     debugger
//     for(let a = 2; a < guess; a++){
//         if(x % a == 0){
//             temp = temp + 1;
//         }
//     }
//     if(temp == 0){
//         console.log("It's prime number");
//     } else{
//         console.log("It isn't prime number");
//     }
// }
// f4(guess);


//2D Array
let row = Number(prompt("Give me your row"));
let col = Number(prompt("Give me your column"));
