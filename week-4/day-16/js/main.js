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
console.log(a);