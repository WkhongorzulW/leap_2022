/**
 * Game setup
 * 
 * user should guess a number
 * 
 * we need to create new ship on the board
 * 
 * | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
 * | x | x | o | o | o | x | x |
*/

let guesses = 0;
let isSunk = false;
let hit = 0;
let miss = 0;

let location1 = 3;
let location2 = 4;
let location3 = 5;

while(!isSunk){
    console.log("game begins");

    let userGuess = Number(prompt("Give me your position"));
    guesses = guesses + 1;
    if(guesses > 6){
        console.log(guesses);
        break;
    }
    if(userGuess > 0 && userGuess < 7){
        console.log(userGuess);

        if(location1 == userGuess || location2 == userGuess || location3 == userGuess){
            alert("hit");
            hit = hit + 1;
            if(location1 == userGuess){
                location1 = -1;
            }
            if(location2 == userGuess){
                location1 = -1;
            }
            if(location3 == userGuess){
                location1 = -1;
            }
        }
        else{
            alert("miss");
        }
        console.log(hit);
        if(hit == 3){
            isSunk = true;
        }
    }

    else{
        alert("Give me numbers 0 and 6");
    }
}
if(isSunk && guesses < 6){
    alert("YOU WON!");
}
else if(guesses > 6){
    alert("YOU LOST");
}
else{
    alert("YOU LOST");
}
    
console.log("game ends");