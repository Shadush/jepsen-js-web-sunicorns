
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

import {markdown} from 'markdown';


let text = "# Snowmania \n" + "## byRomain \n" + "The *goal* is to make snow fall **perpetually** so that people will always have their houses covered in snow. As they are all outside they’ll make snowfights non stop. Having nowhere to live/ warm up they will be freezing to death or die of hypothermia.";
let text2 = "# Becode is love \n" + "## bySouSou \n" + "Mass produce the becode condoms so that the world population rise up steadily. Ten or so years laters the population will more than double. The CO2 quantity in the atmosphere will explode, acidic rain and unhealthy air quality becoming the usual standard. Fifty years later the planet will ends up overusing its resources and the world would start its fall. ";
let text3 = "# Plan 42  to conquer the world \n" + "## by SouSou \n" + "Since we are such good devs (and hackers), we can easily infiltrate databases around the world. Not random and futile ones but the databases which store the most embarrassing stuff you can imagine.  I talk photos you send to your SO, your face when you went to prom (#blunderyears).  Nobody is safe : Snapchat, Facebook, ... I said nobody is safe. When we have the good stuff, we can blackmail anyone to get what we want.";
let text4 = "# Conquer the world \n" + "## By Stéphanie \n" + " Conquer the world by destroying large societies to take their database ! If they aren't willing, take their families hostage.";
let text5 = "# Animals!\n" + "## By Stéphanie \n" + " Animals will conquer the world. They will scheme to replace humans as society leaders. And lead the world to do whatever they want with it. Humans will be the slaves of animals.";
let text6 = "# Opération Folamour \n"  + "##Take control of all the nuclear warheads on the planet.\n" + " After blowing up several of the world's largest cities.... It will be easier to ask for full control of the world.";

text = markdown.toHTML(text);
text2 = markdown.toHTML(text2);
text3 = markdown.toHTML(text3);
text4 = markdown.toHTML(text4);
text5 = markdown.toHTML(text5);
text6 = markdown.toHTML(text6);

let p = document.createElement("p");
p.innerText = "Snowmania";
p.className = "idea";
document.querySelector(".content").appendChild(p);
localStorage.setItem('Snowmania', text);

p = document.createElement("p");
p.innerText = "Becode is love";
p.className = "idea";
document.querySelector(".content").appendChild(p);
localStorage.setItem('Becode is love', text2);

p = document.createElement("p");
p.innerText = "Plan 42";
p.className = "idea";
document.querySelector(".content").appendChild(p);
localStorage.setItem('Plan 42', text3);

p = document.createElement("p");
p.innerText = "Conquer the world";
p.className = "idea";
document.querySelector(".content").appendChild(p);
localStorage.setItem('Conquer the world', text4);

p = document.createElement("p");
p.innerText = "Animals";
p.className = "idea";
document.querySelector(".content").appendChild(p);
localStorage.setItem('Animals', text5);

p = document.createElement("p");
p.innerText = "Folamour";
p.className = "idea";
document.querySelector(".content").appendChild(p);
localStorage.setItem('Folamour', text6);


let ideas = document.querySelectorAll(".idea");

for (let i = 0; i < ideas.length; i++) {
  ideas[i].addEventListener("click", (event) => {
    console.log(event.target.innerText);
    let x = localStorage.getItem(event.target.innerText);
    console.log(x);
  });
}

//console.log(localStorage.getItem('item2'));
//console.log(localStorage.getItem('item3'));
