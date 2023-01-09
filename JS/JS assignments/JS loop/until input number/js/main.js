let number = Number(prompt("Give a number 0 to 10"));
let down = [];
for(let i = 0; i < number; i++){
    down = down + i + " ";
}
console.log(down);

for(let i = 9; i > number; i--){
    console.log(i);
}