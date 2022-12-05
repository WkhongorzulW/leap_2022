let F1 = 0;
let F2 = 1;
let F3 = 0;
let n = 0;
console.log(F1);
console.log(F2);
let range = Number(prompt("Give me your range"));
while(n < range){
    F3 = F1 + F2;
    F1 = F2;
    F2 = F3;
    n = n + 1;
    console.log(F3);
}