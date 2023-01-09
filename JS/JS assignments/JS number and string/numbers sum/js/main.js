let number = prompt("Give a number from 100 to 999");

let a = Number(number.substring(0, 1));
let b = Number(number.substring(1, 2));
let c = Number(number.substring(2, 3));

alert(a + b + c);