console.log(document.getElementById("aimag-101").innerHTML);
console.log(document.getElementById("aimag-522").innerHTML);
document.getElementById("aimag-315").innerHTML = "Bavaria";
console.log(document.getElementById("aimag-315").innerHTML);

document.getElementById("aimagNames").style = "font-size: 30px";
document.getElementById("aimag-101").style = "color: pink";
document.getElementById("aimag-202").style = "color: blue";
document.getElementById("aimag-103").style = "color: gray";
document.getElementById("aimag-205").style = "color: purple";
document.getElementById("aimag-407").style = "color: orange";
document.getElementById("aimag-211").style = "color: skyblue";

document.getElementById("aimag-112").style = "padding: 30px; color: red";
document.getElementById("aimag-113").style = "color: yellow; background-color: blue; padding: 15px";
document.getElementById("aimag-416").style = "background-color: skyblue; margin: 20px";
document.getElementById("aimag-218").style = "color: hotpink; background-color: yellow; border-radius: 50px; padding: 20px";
document.getElementById("aimag-219").style = "color: hotpink; background-color: gray; border-radius: 50px; padding: 20px; margin: 10px";
document.getElementById("aimag-120").style = "background-color: hotpink; color: yellow; border-radius: 50px; padding: 20px";

for(let i = 0; i < document.getElementsByClassName("khangai").length; i++){
    document.getElementsByClassName("khangai")[i].style = "font-size: 18px; color: pink; background-color: gray; border-radius: 20px; padding: 10px; margin: 10px"
}
for(let i = 0; i < document.getElementsByClassName("baruun").length; i++){
    document.getElementsByClassName("baruun")[i].style = "font-size: 25px; color: yellow; background-color: orange; border-radius: 20px; padding: 10px; margin: 10px"
}
for(let i = 0; i < document.getElementsByClassName("zuun").length; i++){
    document.getElementsByClassName("zuun")[i].style = "font-size: 18px; color: hotpink; background-color: black; border-radius: 20px; padding: 10px; margin: 10px"
}
for(let i = 0; i < document.getElementsByClassName("tuv").length; i++){
    document.getElementsByClassName("tuv")[i].style = "font-size: 30px; color: orange; background-color: blue; border-radius: 20px; padding: 10px; margin: 10px"
}

document.getElementsByTagName("span")[0].innerHTML = "It's a span tag!";
document.getElementsByTagName("span")[0].style = "color: purple; text-shadow: 3px 3px 5px red; font-size: 20px";

for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-1")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "text-align: center; background-color: pink; border-radius: 20px; margin: 10px; padding: 10px"
    }
}
for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-2")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: orange; color: white; border-radius: 20px; margin: 10px; padding-left: 50px; padding: 10px"
    }
}
for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-3")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color: black; color: hotpink; border-radius: 20px; margin: 10px; padding-left: 200px; padding: 10px; text-shadow: 2px 2px 3px white"
    }
}
for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-4")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "text-align: center; background-color: skyblue; color: yellow; border-radius: 20px; margin: 10px; padding: 10px; box-shadow: 5px 5px 5px orange"
    }
}
for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-5")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "text-align: center; background-color: red; color: white; border-radius: 20px; margin: 10px; padding: 10px; box-shadow: 5px 5px 5px yellow"
    }
}


console.log(document.querySelector("#aimagNames"));
console.log(document.querySelector(".khangai"));

console.log(document.getElementsByClassName("khangai"));
console.log(document.querySelectorAll(".khangai"));


document.querySelector("#demo").innerHTML = "Date : " + Date();

document.querySelector("img").src = "./img/img1.jpg";
document.querySelector("img").style = "width: 500px";


const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent); //h2.innerHTML = "Манай сайтад тавтай морил";
const main = document.getElementsByTagName("body");
const h1 = document.querySelector("h1");
h1.appendChild(newDiv);

console.log(document.getElementsByTagName("body"));


