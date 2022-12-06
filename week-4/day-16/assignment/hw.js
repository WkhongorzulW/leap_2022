let numbers = [1, 2, 3, 12, 34, 45, 67, 89, 90, 100];
let guess = Number(prompt("Give a random number"));
function f1(x){
    for(let i = 0; i < numbers[i]; i++){
        if(numbers[i] == x){
            console.log(`${guess} is here`);
        }
        else{
            console.log(`${guess} isn't here`);
        }
    }
}
console.log(f1(numbers[i]));