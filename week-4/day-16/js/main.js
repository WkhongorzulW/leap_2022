let a = [1, 4, 5, 6, 8, 10, 9, 8];
console.log(a);
for(let i = 0; i < a.length; i++){
    if(a[i] % 2 == 0){
        a[i] = a[i] + 4;
    }
    else if(a[i] % 2 != 0){
        a[i] = a[i] - 5;
    }
}
//console.log(a);



function isEven(x){
    //console.log("The number is " + x);
    if(x % 2 == 0){
        //console.log("It's a even number");
        return true;
    } else{
        //console.log("It's a odd number");
        return false;
    }
}

console.log(isEven(a[0]));
console.log(isEven(a[1]));

// isEven(5);
// isEven(100);
// isEven(a[0]);


// addTwoNumbers(x, y) = x + y;
function addTwoNumbers(x, y){
    return x + y;
}
console.log(addTwoNumbers(4, 5));


function multiplyTwoNumbers(x, y){
    return x * y;
}
console.log(multiplyTwoNumbers(4, 5));
