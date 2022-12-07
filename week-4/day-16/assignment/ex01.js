let num1 = Number(prompt("Give number for 'x"));
let num2 = Number(prompt("Give number for 'y"));

// if(x < y){
//     console.log(y + ' is bigger than ' + x);
// }
// else{
//     console.log(x + ' is bigger than ' + y);
// }


function findMax(x, y){
    if(x < y){
        console.log(y + ' is bigger than ' + x);
    }
    else{
        console.log(x + ' is bigger than ' + y);
    }
}

findMax(num1, num2);


