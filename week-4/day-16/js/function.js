console.log("My function");

// function declararion
function f(){
    console.log("Hello finction");
}

//function call
f();

//1

/**
 * f(x) = x * x => x is parameter буюу гаднаас авдаг хувьсагч
 */

function f1(x){
    console.log(x * x);
}
f1(5);

function f2(x, y){
    console.log(Math.pow(x, 2) + Math.pow(y, 2));
}
f2(3, 5);

function f3(x, y){
    console.log(Math.pow(x * y, 2));
}
f3(1, 2);

function E(m, c){
    console.log(m * Math.pow(c, 2));
}
E(40,4);



function factorial(x){
    let multiple = 1;
    for(let i = 1; i <= x; i++){
        multiple = multiple * i;
    }
    console.log(multiple);
}
factorial(6);



function f5(x, y){
    console.log(Math.cos(x) - Math.sin(y));
}
f5(5, 4);

function f6(x){
    console.log(Math.pow(x, 3) + Math.pow(x, 2) + (5 * x) + 12);
}
f6(1);

function f7(x){
    console.log(Math.pow(x, 2));
}
f7(5);

function Fib(x){
    console.log();
}

function f8(x){
    console.log(Math.sqrt(x));
}
f8(9);


