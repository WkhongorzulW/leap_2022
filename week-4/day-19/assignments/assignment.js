
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