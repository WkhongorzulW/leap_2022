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