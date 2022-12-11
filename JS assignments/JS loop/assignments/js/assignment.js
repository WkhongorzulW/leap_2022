// // While loop when it's string

// let a = prompt("Give number"), count = 0, sum = 0;
// while(count < a.length){
//     sum = sum + Number(a.charAt(count));
//     count = count + 1;
// }
// console.log(sum);

//While loop when it's number

let N = Number(prompt("Give number"));
let rem = 0, sum = 0;
// while(N > 0){
//     rem = N % 10;
//     sum = sum + rem;
//     N = Math.floor(N / 10);
// }
// console.log(sum);

//FOR LOOP
for( ; N > 0 ; ){
    rem = N % 10;
    sum = sum + rem;
    N = Math.floor(N / 10);
}
console.log(sum);

// // n < 100
// let x = Number(prompt("Give a number < 100"));
// let result = x % 1;
// let result2 = x % x;
// if(result )


// let a = prompt("Give number");
// console.log(a.length);

// //factorial
// let n = Number(prompt("Give number for !n"));
// let m = 1;
// let multiple = 1;
// while(m <= n){
//     multiple = multiple * m; 
//     m = m + 1; 
//     console.log(multiple); 
// }

////bodolt...
// // m = 1 multiple = 1
// m = m + 1; //2
// multiple = multiple * m; //2
// console.log(multiple); //2

// // m = 2 multiple = 2
// m = m + 1; //3
// multiple = multiple * m; //6
// console.log(multiple); //6

// // m = 3 multiple = 6
// m = m + 1; //4
// multiple = multiple * m; //24
// console.log(multiple); //24

// // m = 4 multiple = 24
// m = m + 1; //5
// multiple = multiple * m; //120
// console.log(multiple); //120