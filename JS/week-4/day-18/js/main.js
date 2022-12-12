console.log("Array methods")

// shift
// arr1 = [1, 2, 3] => //shift(arr1) => [2, 3]

let shiftArr = (arr) => {
    let tempArray = [];
    for(let i = 0; i < arr.length; i++){
        if(i != 0){
            tempArray.push(arr[i]);
        }
    }
    return tempArray;
}
let arr1 = [1, 2, 3, 5, 6];
console.log(shiftArr(arr1));
console.log("array shift method");
const arr = [1, 2, 3];
const firstElement = arr.shift();
console.log(arr);
console.log(firstElement);


console.log("Unshift array algorithm");

let unShiftArray = function (arr, number){
    let tempArray = [];
    tempArray.push(number);

    for(let i = 0; i < arr.length; i++){
        tempArray.push(arr[i]);
    }
    return tempArray;
}
let arr2 = [5, 6, 7];
console.log(unShiftArray(arr2, 6));
console.log("Array unshift method");
const array1 = [1, 2, 3];
console.log(array1.unshift(4));
console.log(array1);

function sortingAlgorithm(arr){
    for(let i = 0; i <= arr.length - 2; i++){
        let indexMin = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[indexMin]){
                indexMin = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = temp;
    }
    return arr;
}
let sortArray = [1, 2, 8, 7, -1, 10];
console.log(sortArray);
console.log(sortingAlgorithm(sortArray));


console.log("array sorting");
const names = ["Marlaa", "Javkhaa", "Javkhlan", "Erdene", "Dorj"];
console.log(names);
names.sort();
console.log(names);


console.log("array reverse");
function arrayReverse(arr){
     let tempArray = [];
     for(let i = arr.length - 1; i >= 0; i--){
        tempArray.push(arr[i]);
     }
     return tempArray;
}
let arrReverse = [4, 5, 1, 8];
console.log(arrReverse);
console.log(arrayReverse(arrReverse));


const numbers = ["one", "two", "three"];
console.log("array1:", numbers);
const reversed = numbers.reverse();
console.log("reversed:", reversed);


const nameSlice = ["bat", "dorj", "purev", "davaa", "tomor"];
console.log(nameSlice.slice(2));
console.log(nameSlice);


function arraySliced (arr, index){
    for(let i = 0; i < index; i++){
        arr.shift();
    }
    return arr;
}
let arraySlice = ["bat", "bold", "bolor", "bilguun", "bulgan"];
console.log(arraySlice);
console.log(arraySliced(arraySlice, 2)); 



console.log("Splice method");
const spliceNames = ["Davaa", "Lkhagva", "Purev", "Byamba"]
spliceNames.splice(1, 0, "Myagmar");
//1deh index deer shineer utga nemeh
console.log(spliceNames);

spliceNames.splice(4, 0, "Baasan");
console.log(spliceNames);

spliceNames.splice(6, 0, "Nyam");
console.log(spliceNames);


