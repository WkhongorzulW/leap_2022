let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
console.log(array)

let even = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
        even = even + 1;
    }
}
console.log(`Тэгш тоо ${even} ширхэг`);

let odd = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
        odd = odd + 1;
    }
}
console.log(`Сондгой тоо ${odd} ширхэг`)