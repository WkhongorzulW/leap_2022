//1
let a = 12;
let b = 85;

function findMax(x, y){
    if(x < y){
        console.log(y + " is the max");
    }
    else if(x > y){
        console.log(x + " is the max");
    }
}
findMax(a, b);


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


//Tip
// const tip1 = 3000;
// const tip2 = 27500;
// const tip3 = 100000;
// let tipResult1 = tip1 >= 5000 && tip1 <= 30000 ? tip1 * 1.15: tip1 * 1.2;
// let tipResult2 = tip2 >= 5000 && tip2 <= 30000 ? tip2 * 1.15: tip2 * 1.2;
// let tipResult3 = tip3 >= 5000 && tip3 < 30000 ? tip3 * 1.15: tip3 * 1.2;
// console.log(tipResult1);
// console.log(tipResult2);
// console.log(tipResult3);


let tips = [3000, 27500, 100000];
let result = 0;
function f1(x){
    for(let i = 0; i < tips.length; i++){
        if(tips.length > 5000 || tips.length < 30000){
            result = x[i] * 1.15;
            console.log(result);
        } else{
            result = x[i] * 1.2;
            console.log(result);
        }
    }
}
f1(tips);