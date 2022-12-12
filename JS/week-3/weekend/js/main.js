// Prime number
let number = Number(prompt("Give number < 100"));
while(number < 100){
    if(number % 2 == 0){
        if(number == 2){
            console.log(`${number} is prime number`);
        }
        console.log(`${number} isn't prime number`);
    }
    else if(number % 2 == 1){
        console.log(`${number} is prime number`);
    }
    break;
}
