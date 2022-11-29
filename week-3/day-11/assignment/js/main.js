console.log("1:")
let i = 4 > 3; //true
let ii = 4 < 3; //false
let iii = 4 >= 3; 
let iv = 4 <= 3;
let v = 4 == 4;
let vi = 4 === 4;
let vii = 4 != 4;
let viii = 4 !== 4;
let ix = 4 != "4";
let x = 4 == "4";
let xi = 4 === "4";
console.log(i);
console.log(ii);
console.log(iii);
console.log(iv);
console.log(v);
console.log(vi);
console.log(vii);
console.log(viii);
console.log(ix);
console.log(x);
console.log(xi);

console.log("2:")
let one = 4 > 3 && 10 < 12;
let two = 4 > 3 && 10 > 12;
let three = 4 > 3 || 10 < 12;
let four = 4 > 3 || 10 > 12;
let five = !(4 > 3);
let six = !(4 < 3);
let seven = !(4 > 3 && 10 < 12);
let eight = !(4 > 3 && 10 > 12);
let nine = !(4 === "4");
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(seven);
console.log(eight);
console.log(nine);

console.log("3:");
// let myAge = (18);
// let yourAge = prompt("Your age :");
// let result = (myAge - yourAge);
// if (result < 0){
//     console.log("I am younger than you.")
// }
// else if(result > 0){
//     console.log("You are younger than me.")
// }

console.log("4:");
// let hours = 40;
// let ratePerHour = 20000;
// let yourHours = prompt("Enter your work hour:")
// let salary = yourHours * ratePerHour;
// console.log(salary);

console.log("5:")
let a = prompt("give a"), b = prompt("give b"), c = prompt("give c"), d = prompt("give d");
let e = a + b + c + d;
let f = a + b + c;
let g = a + b + d;
let h = a + d + c;
let j = d + b + c;
let k = a + b, l = a + c, m = a + d, n = b + d, o = b + c, p = c + d;

if(a > 80 && b > 80 && c > 80 && d > 80){
    console.log(e);
}

else if(a > 80 && b > 80 && c > 80 && d < 80){
    console.log(f);
}
else if(a > 80 && b > 80 && c < 80 && d > 80){
    console.log(g);
}
else if(a > 80 && b < 80 && c > 80 && d > 80){
    console.log(h);
}
else if(a < 80 && b > 80 && c > 80 && d > 80){
    console.log(j);
}

else if(a > 80 && b > 80 && c < 80 && d < 80){
    console.log(k);
}
else if(a > 80 && b < 80 && c > 80 && d < 80){
    console.log(l);
}
else if(a > 80 && b < 80 && c < 80 && d > 80){
    console.log(m);
}
else if(a < 80 && b > 80 && c < 80 && d > 80){
    console.log(n);
}
else if(a < 80 && b > 80 && c > 80 && d < 80){
    console.log(o);
}
else if(a < 80 && b < 80 && c > 80 && d > 80){
    console.log(p);
}


else if(a > 80 && b < 80 && c < 80 && d < 80){
    console.log(a);
}
else if(a < 80 && b > 80 && c < 80 && d < 80){
    console.log(b);
}
else if(a < 80 && b < 80 && c > 80 && d < 80){
    console.log(c);
}
else if(a < 80 && b < 80 && c < 80 && d > 80){
    console.log(d);
}