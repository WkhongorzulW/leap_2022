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



// Avarage of array
let findOutAvarage = [1, 2, 3, 4, 5, 6];
let sum = 0;
function f2(x){
    for(; x < findOutAvarage.length; x++){
        sum = sum + findOutAvarage[x];
    }
    console.log(sum);
}
f2(0);

