// let a = "hi", b = "hi";
// console.log(a < b);

// console.log(a == b);

// console.log(a === b);

// let c = 10;
// let d = "10";
// console.log(c == d);
// console.log(c === d);
// console.log(c !== d);

// let e = true;
// let f = false;
// console.log(e < f);
// console.log(e > f);


// let result = 10;
// if (result > 10){
//     console.log('more than 10');
// }
// else{
//     console.log('less than 10');
// }

// result > 10 ? (result < 11 ? console.log('test'): console.log('hi')) : console.log('more than 10');


// //Tip
// const tip1 = 3000;
// const tip2 = 27500;
// const tip3 = 100000;
// let tipResult1 = tip1 >= 5000 && tip1 <= 30000 ? tip1 * 1.15: tip1 * 1.2;
// let tipResult2 = tip2 >= 5000 && tip2 <= 30000 ? tip2 * 1.15: tip2 * 1.2;
// let tipResult3 = tip3 >= 5000 && tip3 < 30000 ? tip3 * 1.15: tip3 * 1.2;
// console.log(tipResult1);
// console.log(tipResult2);
// console.log(tipResult3);


// //exam result
// const studentPoint = Number(prompt('Give me your score'));
// const studentName = prompt('Give me your name');
// let studentResult;
// if(studentPoint < 60){
//     studentResult = "So bad";
// } else if(studentPoint >= 60 && studentPoint < 70){
//     studentResult = "Enough";
// } else if(studentPoint >= 70 && studentPoint < 80){
//     studentResult = "Middle";
// } else if(studentPoint >= 80 && studentPoint < 90){
//     studentResult = "Good";
// } else if(studentPoint >= 90 && studentPoint <= 100){
//     studentResult = "Excellent";
// } else {
//     alert("Onoo 100 hurtel baih ystoi")
// }
// alert(studentName + ' - ' + studentPoint + ' - ' + studentResult)


// //template
// console.log(`${studentName} - ${studentPoint} - ${studentResult}`);


//alert("Lorem Ipsum is simply dummy text of \"\" the printing and typesetting industry. \n\n \t Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")


// console.log("it's log");
// console.error("it's error");


// //.length
// const str = "Life, the universe and everything."
// console.log(str.length);


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


// //.chatAt(index) str[index]
// console.log(str.charAt(0));
// console.log(str[1]);

// //.toUpperCase() .toLowerCase
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// let firstName = "John";
// let fullName = firstName.concat(` `, "Smith");
// console.log(fullName);
// console.log(firstName);


// console.log(Number("abc"));
// console.log(Number.isInteger(Number("abc")));
// console.log(Number("12312345"));
// console.log(Number.isInteger(Number("12312345")));


// const phoneNumber = prompt("Please give your phone number :");
// const regionNum = phoneNumber.substr(0, 4);
// const mobileNum = phoneNumber.substr(4, 12);
// if(regionNum == '+976' && regionNum.length == 4 && Number.isInteger(Number(mobileNum)) && phoneNumber.length == 12){
//     alert("Your phone number is correct.");
// } else{
//     alert("Sorry, your phone number is wrong.");
// }


// let abc = prompt("Please give number for (...) abc");
// let a = Number(abc.charAt(0));
// let b = Number(abc.charAt(1));
// let c = Number(abc.charAt(2));
// if(Number.isInteger(Number(abc)) && abc.length == 3){
//     alert(a + b + c);
// }


// //triangle
// const a = Number(prompt("Give side a for triangle"));
// const b = Number(prompt("Give side b for triangle"));

// if(Number.isInteger(Number(a)) && Number.isInteger(Number(b))){
//     alert(Math.sqrt(a * a + b * b));
// } else {
//     alert("Not a Number");
// }