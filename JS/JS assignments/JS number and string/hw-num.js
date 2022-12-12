// //random number between
// let a = prompt(Number("Give 'a'"));
// let c = prompt(Number("Give 'c'"));
// let b;
// if(a < c){
//     alert(b > a && b < c);
// }
// else if(a > c){
//     alert(b < a && b > c);
// }
// else if(a = c){
//     alert(a = b);
// }

// //triangle
// const a = Number(prompt("Give side a for triangle"));
// const b = Number(prompt("Give side b for triangle"));

// if(Number.isInteger(Number(a)) && Number.isInteger(Number(b))){
//     alert(Math.sqrt(a * a + b * b));
// } else {
//     alert("Not a Number");
// }

// let abc = prompt("Please give number for (...) abc");
// let a = Number(abc.charAt(0));
// let b = Number(abc.charAt(1));
// let c = Number(abc.charAt(2));
// if(Number.isInteger(Number(abc)) && abc.length == 3){
//     alert(a + b + c);
// }

// const phoneNumber = prompt("Please give your phone number :");
// const regionNum = phoneNumber.substr(0, 4);
// const mobileNum = phoneNumber.substr(4, 12);
// if(regionNum == '+976' && regionNum.length == 4 && Number.isInteger(Number(mobileNum)) && phoneNumber.length == 12){
//     alert("Your phone number is correct.");
// } else{
//     alert("Sorry, your phone number is wrong.");
// }

// const registerNumber = prompt("Please give your register number");
// if(registerNumber.length == 10){
//     alert("Done")
// } else{
//     alert("Your register number is incorrect !")
// }
// console.log(registerNumber.charAt(0));
// console.log(registerNumber.charAt(1));

// console.log(registerNumber.substr(0, 2));
// console.log(registerNumber.substr(2, 9));

//  const registerChar = registerNumber.substr(0, 2);
//  const registerNum = registerNumber.substr(2, 9);

// if (Number.isInteger(Number(registerChar))) {
//     alert("Your register characters are correct.");
// } else{
//     alert("Your register characters are wrong.");
// } 
// if(typeof registerNum == NaN){
//     alert("Your register numbers are wrong.");
// } else{
//     alert("Your register numbers are correct.");
// }

// if (!Number.isInteger(Number(registerChar)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10){
//     alert("Your register number is correct.")
// } else{
//     alert("Your register number is incorrect.")
// }