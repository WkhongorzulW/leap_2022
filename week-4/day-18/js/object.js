console.log("Lesson objects")

let rabbit1 = {
    color: "White",
    rName: "Chandaga",
    gender: "Male",
    age: 2,
    jump: function(){
        console.log("Sorry, I have broken my leg, I can't jump")
    },
    sayMyName: function(myName){
        console.log(`Your name is ${myName}`);
    }
}
console.log(rabbit1);
console.log(rabbit1.color);

rabbit1.color = "Mud";
console.log(rabbit1);
rabbit1.jump();

let rabbit2 = {
    color: "Black",
    mass: 7,
    ears: "long",
    nose: "pink",
    jump: function(){
        console.log("I can jump");
    }
}
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
console.log("Here is rabbit 2 is speaking");
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
console.log(rabbit2);
console.log(rabbit2.nose);
rabbit2.jump();

let rabbits = [rabbit1, rabbit2];
console.log(rabbits);

