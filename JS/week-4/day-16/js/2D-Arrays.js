/**
 * Problems
 * 
 * Example-1 : Battleship
 * 
 * | 0 | 0 | 0 | x | x | x | 0 |
 * | 0 | 0 | 0 | x | x | x | 0 |
 * | 0 | 0 | 0 | x | x | x | 0 |
 * | 0 | 0 | 0 | x | x | x | 0 |
 * | 0 | 0 | 0 | x | x | x | 0 |
 * | 0 | 0 | 0 | x | x | x | 0 |
 * | 0 | 0 | 0 | x | x | x | 0 |
 * | 0 | 0 | 0 | x | x | x | 0 |
 * 
 * Example-2 : Tic Tac Toe
 * 
 * | x | o | x |=> row1
 * | o | o | x |=> row2
 * | x | x | o |=> row3
*/


let row1 = ['x', 'o', 'x'];
let row2 = ['o', 'o', 'x'];
let row3 = ['x', 'x', 'o'];
console.log(row1);
console.log(row2);
console.log(row3);



let tictactoe = [['x', 'o', 'x'], ['o', 'o', 'x'], ['x', 'x', 'o']];
console.log(tictactoe);
console.log(tictactoe[1]);
console.log(tictactoe[1] [1]);

// tictactoe[1] [0] = "x";


let x = Number(prompt("Give number 0 - 2"));
let o = Number(prompt("Give number 0 - 2"));
let value = prompt("Give me value");

// for(; x < tictactoe.length; x++){
//     // console.log(tictactoe[1]);
//     //double FOR loops
//     let output = "";
//     for(; o < tictactoe[x].length; o++){
//         output = output + " | " + tictactoe[x] [o] + " |";
//     }
//     console.log(output);
// }

tictactoe[x][o] = value;


console.log("for loop with for loop");
//tictactoe ийн бүх мөрний элементүүдийг хэвлэж харуулна уу


for(let i = 0; i < tictactoe.length; i++){
    let output1 = "";
    // console.log(tictactoe[1]);
    //double FOR loops
    for(let j = 0; j < tictactoe[i].length; j++){
        output1 = output1 + " | " +  tictactoe[i] [j] + " |";
    }
    console.log(output1);
}
