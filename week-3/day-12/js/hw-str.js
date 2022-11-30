// console.log(` Hello I am "Khongorzul". \n I am '18' years old. \n \t This is the new line with tab and some \ backlashes\ `);


// //1
// let firstName = "Xongorzul";
// let lastName = "Batjargal";
// console.log(firstName.length);
// console.log(lastName.length);


// //2
// console.log(firstName.toLowerCase());
// console.log(lastName.toLowerCase());


// //3 
// console.log(firstName.toUpperCase());
// console.log(lastName.toUpperCase());


// //4
// let a = "Pinecone academy-н";
// let b = "leap хөтөлбөрт тавтай морилно уу";
// console.log(a.concat(' ', b));


// //5
// let firstName = prompt("Нэр");
// let lastName = prompt("Овог");
// let country = prompt("Улс");
// let city = prompt("Хот");
// let age = prompt("Нас");
// let job = prompt("Ажил");
// alert("Намайг " + lastName + "-н " + firstName + " гэдэг. Би " + age + " настай. " + country + " улсын " + city + " хотод амьдардаг. " + job + "-р ажилладаг.");


// //1
// let year = prompt("Please enter a YEAR");
// let month = prompt("Please enter a MONTH");
// let day = prompt("Please enter a DAY of month");
// if(month.length == 1 && day.length == 1){
//     alert(year.concat('-0', month, '-0', day));
// } 
// else if(day.length == 1){
//     alert(year.concat('-', month, '-0', day));
// } 
// else if(month.length == 1){
//     alert(year.concat('-0', month, '-', day));
// }
// else{
//     alert(year.concat('-', month, '-', day));
// }


// //2
// let phoneNumber = prompt("Enter your phone number");
// let ab = phoneNumber.substr(0, 2);
// if (phoneNumber.length == 8 && ab == '99' || ab == '95' || ab == '94' || ab == '85'){
//     alert("Operator is 'Mobicom'");
// }
// else if(phoneNumber.length == 8 && ab == '86' || ab == '88' || ab == '89' || ab == '80'){
//     alert("Operator is 'Unitel'");
// }
// else if(phoneNumber.length == 8 && ab == '90' || ab == '91' || ab == '96'){
//     alert("Operator is 'Skytel'");
// }
// else if(phoneNumber.length == 8 && ab == '83' || ab == '93' || ab == '97' || ab == '98'){
//     alert("Operator is 'G-Mobile'");
// }
// else if(phoneNumber.length == 8 && ab == '60' || ab == '66'){
//     alert("Operator is 'ONDO'");
// }
// else{
//     alert("Your phone number is wrong");
// }
