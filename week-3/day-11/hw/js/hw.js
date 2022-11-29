// // competition
// let a = 96, b = 108, c = 89, d = 88, e = 91, f = 110;
// let teamA = ([a + b + c] / 3);
// console.log(teamA);
// let teamB = ([d + e + f] / 3);
// console.log(teamB);
// if(teamA > 100 && teamB > 100 && teamA > teamB){
//     console.log("Team 'A' win")
// }
// else if(teamA > 100 && teamB > 100 && teamA < teamB){
//     console.log("Team 'B' win")
// }
// else if(teamA > 100 && teamB > 100 && teamA == teamB){
//     console.log("Scores are tied")
// }
// else if(teamA < 100 && teamB < 100){
//     console.log("No on is winner")
// }


// let a = prompt ("give a point 'a'"), b = prompt ("give a point 'b'");
// if(a < 60){
//     console.log('Bad');
// }
// else if(a >= 60 && a < 70){
//     console.log('Bat  - ' + a + ' - Enough');
// }
// else if(a >= 70 && a < 80){
//     console.log('Bat  - ' + a + ' - Middle');
// }
// else if(a >= 80 && a < 90){
//     console.log('Bat  - ' + a + ' - Good');
// }
// else if(a >= 90 && a < 100){
//     console.log('Bat  - ' + a + ' - EXcellent');
// }
// if(b < 60){
//     console.log('Onts Dumd  - ' + b + ' - Bad');
// }
// else if(b >= 60 && b < 70){
//     console.log('Onts Dumd  - ' + b + ' - Enough');
// }
// else if(b >= 70 && b < 80){
//     console.log('Onts Dumd  - ' + b + ' - Middle');
// }
// else if(b >= 80 && b < 90){
//     console.log('Onts Dumd  - ' + b + ' - Good');
// }
// else if(b >= 90 && b < 100){
//     console.log('Onts Dumd  - ' + b + ' - EXcellent');
// }


// let a = prompt ("Give first random number:"), b = prompt ("Give second random number:"), c = prompt ("Give third random number:"), d = prompt ("Give fourth random number:");
// if(a < b && a < c && a < d){
//     console.log("minimum number is " + a);
// }
// else if(b < a && b < c && b < d){
//     console.log("minimum number is " + b);
// }
// else if(c < a && c < b && c < d){
//     console.log(" minimum number is " + c);
// }
// else if(d < a && d < b && d < c){
//     console.log("minimum number is " + b);
// }


// let a = prompt ("Give number 'a'"), b = prompt ("Give number 'b'"), c = prompt ("Give number 'c'");
// if (a < b && a < c){
//     console.log("minimum number is " + a);
// } else if (b < a && b < c){
//     console.log("minimum number is " + b);
// } else if (c < a && c < b){
//     console.log("minimum number is " + c);
// }

// if (a > b && a > c){
//     console.log("maximum number is " + a);
// } else if (b > a && b > c){
//     console.log("maximum number is " + b);
// } else if (c > a && c > b){
//     console.log("maximum number is " + c);
// }

// if (a == b && b == c){
//     console.log("minimum and maximum number is " + a)
// }



// let year = prompt ("Give some year number");
// let k = year % 4;
// let l = year % 100;
// let m = year % 400;
// let yes = "High year", no = "Not a high year";
// if(k == 0 || m == 0){
//     console.log(yes);
// }
// else if(l == 0){
//     console.log(no);
// }
// else{
//     console.log(no);
// }