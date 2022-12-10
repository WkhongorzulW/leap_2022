// Animals
console.log("------------animals--------------");

 function howDoesTheFoxSay(array, animalType){
    for(let i = 0; i < array.length; i++){
        if(animalType == array[i].type){
            console.log(`${array[i].sound} - ${array[i].sound} - ${array[i].sound}`);
        }
    }
 }

 let animals = [
    {
        type: "dog",
        sound: "woof",
    },
    {
        type: "cow",
        sound: "moo",
    },
    {
        type: "cat",
        sound: "meow",
    },
];

 howDoesTheFoxSay(animals, "dog");
 console.log("Dog barkink")
 howDoesTheFoxSay(animals, "cow");
 console.log("Cow mooing");
 howDoesTheFoxSay(animals, "cat");
 console.log("Cat meowing");

//Students
console.log("------------students--------------")

function findOlderStudents(array){
    for(let i = 0; i < array.length; i++){
        if((2022 - array[i].birthOfYear) > 20){
            console.log(array[i].sName);
        }
    }
}

function studentsAge(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i].sName);
        console.log(2022 - array[i].birthOfYear);
    }

}

function isSingle(array){
    for(let i = 0; i < array.length; i++){
        if(array[i].single == false){
            console.log(`${array[i].sName} is single`);
        }
    }
}

let students = [
    {
        sName: "Tsetsgee",
        birthOfYear: 2000,
        hobby: "singing",
        single: true,
    },
    {
        sName: "Bolor",
        birthOfYear: 2001,
        hobby: "painting",
        single: true,
    },
    {
        sName: "Bayaraa",
        birthOfYear: 2004,
        hobby: "dancing",
        single: false,
    },
    {
        sName: "Tamir",
        birthOfYear: 2005,
        hobby: "cycling",
        single: false,
    },
]
findOlderStudents(students);
studentsAge(students);
isSingle(students);

//Accessing object
console.log("------------accessing object--------------");

function gender(array){
    let male = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].gender == "male"){
            male = male + 1;
        } 
    }
    return male;
}

function avarageOfAges(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i].age;
    }
    return sum / array.length;
}

let arrStudents = [
    {
        sName: "Sed-Erdene",
        age: 19,
        gender: "male", 
    },
    {
        sName: "Indra",
        age: 19,
        gender: "female", 
    },
    {
        sName: "Khatnaa",
        age: 21,
        gender: "male", 
    },
    {
        sName: "Temuulen",
        age: 23,
        gender: "male", 
    },
    {
        sName: "Namuun",
        age: 23,
        gender: "female", 
    }
]


console.log(`Avarage of students ages: ${avarageOfAges(arrStudents)}`);
console.log(`Male: ${gender(arrStudents)}`);
console.log(`Female: ${arrStudents.length - gender(arrStudents)}`);

arrStudents[0].lastname = "Bat";
console.log(arrStudents[0]);

//MERN Object
console.log("------------mern object--------------");

function mostSkilled(array){
    
}

const users = [
    {
        uName: "Alex",
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JS", "Python"],
        age: 25,
        isLoggedIn: false,
        points: 40,
    },
    {
        uName: "John",
        email: "john@john.com",
        skills: ["HTML", "CSS", "JS", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50,
    },
    {
        uName: "Thomas",
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JS", "React"],
        age: 18,
        isLoggedIn: false,
        points: 40,
    },
    {
        uName: "Pual",
        email: "pual@pual.com",
        skills: ["HTML", "CSS", "JS", "MongoDB", "Express", "React", "Node"],
        age: 25,
        isLoggedIn: false,
        points: 40,
    },
]
console.log(users[1]);
console.log(mostSkilled(users));


// Store
console.log("------------store--------------");



const data = [
    {
        productName: "Cake",
        unitPrice: 5000,
        amount: 100,
        totalPrice: 500000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Chocolate",
        unitPrice: 3000,
        amount: 18,
        totalPrice: 54000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Smoothie",
        unitPrice: 4000,
        amount: 50,
        totalPrice: 300000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Spagetti",
        unitPrice: 3500,
        amount: 200,
        totalPrice: 610000,
        casherId: 1,
        date: "2022-11-01",
    },
]