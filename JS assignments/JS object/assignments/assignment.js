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
    let max = -1;
    for(let i = 0; i < array.length; i++){
        if(max <= array[i].skills.length){
            max = array[i].skills.length;
        }
    }
    return max;
}

let mern = function(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].skills.length; j++){
            if(array[i].skills[j] == "MongoDB" || array[i].skills[j] == "Express" || array[i].skills[j] == "React" || array[i].skills[j] == "Node"){
                console.log(`${array[i].uName} ${array[i].skills}`);
            }
        }
    }
}

let older = (array) => {
    for(let i = 0; i < array.length; i++){

    }
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
        skills: ["HTML", "CSS", "JS", "React", "Redux", "Node"],
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
mern(users);


// Store
console.log("------------store--------------");

let totalTotalPrice = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i].totalPrice;
    }
    return sum;
}

let totalAmount = function(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i].amount;
    }
    return sum;
}

function mostSaled(array){
    let max = -1;
    for(let i = 0; i < array.length; i++){
        if(max <= array[i].amount){
            max = array[i].amount;
        }
    }
    return max;
}

const dataStore = [
    {
        productName: "Cake",
        unitPrice: 5000,
        amount: 100,
        totalPrice: 500_000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Chocolate",
        unitPrice: 3000,
        amount: 180,
        totalPrice: 540_000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Smoothie",
        unitPrice: 4000,
        amount: 50,
        totalPrice: 200_000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Spagetti",
        unitPrice: 3500,
        amount: 200,
        totalPrice: 700_000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Yogurt",
        unitPrice: 2000,
        amount: 350,
        totalPrice: 700_000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Apple juice",
        unitPrice: 2300,
        amount: 120,
        totalPrice: 276_000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Cheese cake",
        unitPrice: 7000,
        amount: 40,
        totalPrice: 280_000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Ham",
        unitPrice: 3300,
        amount: 110,
        totalPrice: 363_000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Rice",
        unitPrice: 3000,
        amount: 500,
        totalPrice: 1_500_000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Noodle",
        unitPrice: 2000,
        amount: 450,
        totalPrice: 900_000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Green tea",
        unitPrice: 6000,
        amount: 80,
        totalPrice: 480_000,
        casherId: 1,
        date: "2022-11-01",
    },
    {
        productName: "Coockie",
        unitPrice: 4000,
        amount: 280,
        totalPrice: 1_120_000,
        casherId: 1,
        date: "2022-11-01",
    },
]


console.log(`Total price : ${totalTotalPrice(dataStore)}`);
console.log(`Total amount : ${totalAmount(dataStore)}`);

console.log("***MORE***");
console.log(`${dataStore[8].productName} - ${dataStore[8].unitPrice} - ${dataStore[8].amount}`);
console.log(`${dataStore[9].productName} - ${dataStore[9].unitPrice} - ${dataStore[9].amount}`);
console.log(`${dataStore[4].productName} - ${dataStore[4].unitPrice} - ${dataStore[4].amount}`);
console.log(`${dataStore[11].productName} - ${dataStore[11].unitPrice} - ${dataStore[11].amount}`);
console.log(`${dataStore[3].productName} - ${dataStore[3].unitPrice} - ${dataStore[3].amount}`);

console.log("***LESS***");
console.log(`${dataStore[6].productName} - ${dataStore[6].unitPrice} - ${dataStore[6].amount}`);
console.log(`${dataStore[2].productName} - ${dataStore[2].unitPrice} - ${dataStore[2].amount}`);
console.log(`${dataStore[10].productName} - ${dataStore[10].unitPrice} - ${dataStore[10].amount}`);
console.log(`${dataStore[0].productName} - ${dataStore[0].unitPrice} - ${dataStore[0].amount}`);
console.log(`${dataStore[7].productName} - ${dataStore[7].unitPrice} - ${dataStore[7].amount}`);


for(let i = 0; i < dataStore.length; i++){
    console.log(dataStore[i].productName + " - " + dataStore[i].amount);
}
console.log(mostSaled(dataStore));


