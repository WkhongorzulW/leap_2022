// console.log(Math.PI);
// console.log(Math.PI.toFixed(2));
// const budget = 1_000_000_000;
// console.log(budget);

// const degrees = 45;
// let rad = degrees * (Math.PI / 180);
// console.log(rad.toFixed(4));

// let a = 5, b = 9;
// const diff = Math.abs(a - b);
// console.log(diff);

// console.log(Math.ceil(.95)); //1
// console.log(Math.ceil(4)); //4
// console.log(Math.ceil(7.004)); //8
// console.log(Math.ceil(-7.004)); //-7

// console.log(Math.floor(5.95)); //5
// console.log(Math.floor(5.05)); //5
// console.log(Math.floor(5)); //5
// console.log(Math.floor(-5.05)); //-6

// console.log(Math.round(0.9)); //1
// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)); //6 6 5
// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95)); //-5 -5 -6

// console.log(Math.max(1, 3, 2)); //3
// console.log(Math.max(-1, -3, -2)); //-1

// console.log(Math.min(2, 3, 1)); //1
// console.log(Math.min(-2, -3, -1)); //-3
// console.log(Math.pow(7, 3)); //343

// console.log(Math.sqrt(45)); //6.7


////sqrt
// const y = Number(prompt("Give me 'y'"));
// const z = Number(prompt("Give me 'z'"));
// alert(Math.floor(Math.sqrt(Math.pow(y, 2) + Math.pow(z, 2))));


// console.log(Math.ceil(Math.random()*6));


// const a = Number(prompt("Give 'a'"));
// const b = Number(prompt("Give 'b'"));
// while(Math.floor(Math.random() * (b - a) + a) <= 50){
//     console.log(Math.floor(Math.random() * (b - a) + a));
//     count = (Math.floor(Math.random() * (b - a) + a)) + 1;
// }

// let first = prompt("Give your first number");
// let second = prompt("Give me your second number");
// const max = Math.max(first, second);
// const min = Math.min(first, second);

// //random number between
// console.log()



//////    LOOPS    ///////
// let count = 1;
// console.log("loop starts");
// while (count <= 10){
//     console.log(count);
//     count = count + 1;
// }

// console.log("loop ended");
/**
 * hervee count = count + 1 gedgiig bichihgui bol 
 * INFINITE (forever) LOOP gedeg zuiltei tulgarna
 */



// //yes or no
// let reply = prompt("Do you want to continue this game?");
// while(reply == "yes"){
//     alert("Thanks");
//     reply = prompt("Do you want to continue this game?");
//     console.log("Game over");
// }


// let x = Number(prompt("Give a random number"));
// let count = 0;
// let sum = 0;
// while(count < x){
//     console.log(count);
//     count = count + 1;
//     sum = sum + count;
//     console.log(sum);
// }


// //only even numbers
// let a = 100;
// let b = 0;
// while(b < a){
//     console.log(b);
//     b = b + 2;
// }


let max = 10, count = 0, sum = 0;
while(max >= count){
    //iteration-1; count = 0
    sum = sum + count; 
    count = count + 1; 
    console.log(count); 
    console.log(sum); 
}

// //iteration-1; count = 0
// sum = sum + count; //0
// count = count + 1; // 1
// console.log(count); //1
// console.log(sum); //0

// //iteration-2; count = 1
// sum = sum + count; //1
// count = count + 1; //2
// console.log(count); //2
// console.log(sum); //1

// //iteration-3; count = 2
// sum = sum + count; //3
// count = count + 1; //3
// console.log(count); //3
// console.log(sum); //3

// //iteration-4; count = 3
// sum = sum + count; //6
// count = count + 1; //4
// console.log(count); //4
// console.log(sum); //6

// //iteration-5; count = 4
// sum = sum + count; //10
// count = count + 1; //5
// console.log(count); //5
// console.log(sum); //10

// //iteration-6; count = 5
// sum = sum + count; //15
// count = count + 1; //6
// console.log(count); //6
// console.log(sum); //15

// //iteration-7; count = 6
// sum = sum + count; //21
// count = count + 1; //7
// console.log(count); //7
// console.log(sum); //21

// //iteration-8; count = 7
// sum = sum + count; //28
// count = count + 1; //8
// console.log(count); //8
// console.log(sum); //28

// //iteration-9; count = 8
// sum = sum + count; //36
// count = count + 1; //9
// console.log(count); //9 
// console.log(sum); //36

// //iteration-10; count = 9
// sum = sum + count; //45
// count = count + 1; //10
// console.log(count); //10 
// console.log(sum); //55

//fibonacci