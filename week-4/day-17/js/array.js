console.log("Array methods");

// array at function

function findAt(arr, index){
    return arr[index];
}

const array1 = [1, 2, 3, 4, 5];
console.log(findAt(array1, 0));
console.log(findAt(array1, 4));

console.log(array1.at(0));
console.log(array1.at(2));


// arr1 = [ 1, 2, 3]; arr2 = [4, 5, 6]; => [1, 2, 3, 4, 5, 6];
function arrConcat(arr1, arr2){

    let concatedArray = [];
    //array.push()
    for(let i = 0; i < arr1.length; i++){
        concatedArray.push(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++){
        concatedArray.push(arr2[i]);
    }
    return concatedArray;
}
let arrayC1 = [1, 2, 3];
let arrayC2 = [4, 5, 6];
console.log(arrConcat(arrayC1, arrayC2));
console.log(arrConcat(arrayC2, arrayC1));


// array concat method
console.log("Array concat method");
console.log(arrayC1.concat(arrayC2));
console.log(arrayC1 + arrayC2);


// arr1 = [1, 2, 3]; arr2 = [4, 5, 6] => arr3 = [5, 7, 9]
function arrayElementAdd(arr1, arr2){
    let sum = [];
    for(let i = 0; i < arr1.length; i++){
        sum[i] = arr1[i] + arr2[i];
    }
    return sum;
}
console.log(arrayElementAdd(arrayC1, arrayC2));

// array includes
console.log("Array includes");
//arr1 = [2, 4, 5] => 5 -> true, 3 -> false
let arrayIncludes = function(arr, number){
    let found = false;
    for(let i = 0; i < arr.length; i++){
        if(number === arr[i]){
            found = true;
            break;
        }
    }
    return found;
}
let arrayInc = [2, 4, 5];
console.log(arrayIncludes(arrayInc, 2));
console.log(arrayIncludes(arrayInc, 5));
console.log(arrayIncludes(arrayInc, 3));

// array implicit function includes
console.log("function includes");
console.log(arrayInc.includes(2));
console.log(arrayInc.includes(5));
console.log(arrayInc.includes(3));


// arr1 = [2, 3, 4] => 3 index ? -> 2

let findIndex = function(arr, number){
    let index = -1;
    for(let i = 0; i < arr.length; i++){
        if(number === arr[i]){
            index = i;
        }
    }
    return index;
}
const arrIndex = [1, 2, 3];
console.log(findIndex(arrIndex, 3));
console.log(findIndex(arrIndex, 2));
console.log(findIndex(arrIndex, 10));
console.log("now it's time to test indexof method of array");
console.log(arrIndex.indexOf(3));
console.log(arrIndex.indexOf(2));
console.log(arrIndex.indexOf(10));

console.log("indexOf on string");
const animals = ["chono", "buhun", "temee", "nugas", "buhun"];
console.log(animals.indexOf("buhun"));
console.log(animals.indexOf("buhun"));
console.log(animals.indexOf("giraffe"));


// OIN
console.log("JOIN ME function");

//arr1 = [1, 2, 3] => 123
//arr1 = [1, 2, 3] => 1;2;3

let funcJoin = (arr, symbol) => {
    let output = "";
    for(let i = 0; i < arr.length; i++){
        if(i == arr.length - 1){
            symbol = "";
        }
        output = output + arr[i] + symbol;
    }
    return output;
}
const arrayJoin = [ 1, 2, 3];
console.log(funcJoin(arrayJoin, "+"));


console.log("Array JOIN method");
const jiguurten = ["Elee", "Heree", "Galuu"];
console.log(jiguurten.join());
console.log(jiguurten.join(" "));
console.log(jiguurten.join("-"));


// arr1 = [1, 2, 3] => pop => [1, 2]
let popFunc = (arr) =>{
    const lastIndex = arr.length - 1;
    let poppedArray = [];
    for(let i = 0; i < arr.length; i++){
        if(i != lastIndex){
            poppedArray.push(arr[i]);
        }
    }
    return poppedArray;
}
const popArray = [1, 2, 3];
console.log(popFunc(popArray));
console.log(popFunc([12, 4, 3, 5]));

console.log("pop array method");
const popArrayResult = [3, 4, 5, 6, 7];
popArrayResult.pop();
console.log(popArrayResult);