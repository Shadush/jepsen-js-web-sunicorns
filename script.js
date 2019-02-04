// import some polyfill to ensure everything works OK
import "babel-polyfill"

var jquery = require("jquery");
window.$ = window.jQuery = jquery;
// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

import {markdown} from 'markdown';

const modal_template = `<button id="plans" type="button" class="btn btn-primary" data-toggle="modal" data-target="#PLANS">
  sunicornsmes
</button>

<!-- Modal -->
<div class="modal fade" id="PLANS" tabindex="-1" role="dialog" aria-labelledby="PLANSLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="Sunicorns" id="PLANSLabel">Sunicorns</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-primary">Comment idea</button>
        <button type="button" class="btn btn-outline-success">Edit idea</button>
        <button type="button" class="btn btn-outline-danger">Delete idea</button>
      </div>
    </div>
  </div>
</div>`;



let text = "# Snowmania \n" + "## byRomain \n" + "The *goal* is to make snow fall **perpetually** so that people will always have their houses covered in snow. As they are all outside they\’ll make snowfights non stop. Having nowhere to live/ warm up they will be freezing to death or die of hypothermia.";
let text2 = "# Becode_is_love \n" + "## bySouSou \n" + "Mass produce the becode condoms so that the world population rise up steadily. Ten or so years laters the population will more than double. The CO2 quantity in the atmosphere will explode, acidic rain and unhealthy air quality becoming the usual standard. Fifty years later the planet will ends up overusing its resources and the world would start its fall. ";
let text3 = "# Plan_42_to conquer the world \n" + "## by SouSou \n" + "Since we are such good devs (and hackers), we can easily infiltrate databases around the world. Not random and futile ones but the databases which store the most embarrassing stuff you can imagine.  I talk photos you send to your SO, your face when you went to prom (#blunderyears).  Nobody is safe : Snapchat, Facebook, ... I said nobody is safe. When we have the good stuff, we can blackmail anyone to get what we want.";
let text4 = "# Conquer_the_world \n" + "## By Stéphanie \n" + " Conquer the world by destroying large societies to take their database ! If they aren\’t willing, take their families hostage.";
let text5 = "# Animals!\n" + "## By Stéphanie \n" + " Animals will conquer the world. They will scheme to replace humans as society leaders. And lead the world to do whatever they want with it. Humans will be the slaves of animals.";
let text6 = "# Opération Folamour \n"  + "##Take control of all the nuclear warheads on the planet.\n" + " After blowing up several of the world\’s largest cities.... It will be easier to ask for full control of the world.";

text = markdown.toHTML(text);
text2 = markdown.toHTML(text2);
text3 = markdown.toHTML(text3);
text4 = markdown.toHTML(text4);
text5 = markdown.toHTML(text5);
text6 = markdown.toHTML(text6);

var nbvisites = localStorage.getItem('visites');
//console.log(nbvisites);
if (nbvisites == null) {
  storeElement('Snowmania', text);
  storeElement('Becode_is_love', text2);
  storeElement('Plan_42', text3);
  storeElement('Conquer_the_world', text4);
  storeElement('Animals', text5);
  storeElement('Folamour', text6);
  nbvisites = 1;
  storeElement('visites', 1);
};
for (let i = 0; i < localStorage.length; i++) {

  if (localStorage.key(i) != 'visites') {
    createModal(localStorage.key(i));
  }
}


//console.log(localStorage.length);


function storeElement(key, text) {

  localStorage.setItem(key, text);

}


/*let ideas = document.querySelectorAll(".idea");

for (let i = 0; i < ideas.length; i++) {
  ideas[i].addEventListener("click", (event) => {
    //console.log(event.target.innerText);
    let x = localStorage.getItem(event.target.innerText);
    //console.log(x);
  });
}*/

function createModal(key) {

  let div = document.createElement("div");
  div.innerHTML = modal_template;
  document.querySelector(".content").appendChild(div);
  let id = document.getElementById('plans');
  //console.log(id);
  id.dataset.target = "#" + key;
  id.id = "#" + key;
  //console.log(id.dataset.target);
  document.querySelector("#PLANS").id = key;
  div.querySelector(".btn").innerText = key;
  div.querySelector(".modal-body").innerHTML = localStorage.getItem(key);


}

let delete_idea = document.querySelectorAll(".btn-outline-danger");
  for(let i = 0; i < delete_idea.length; i++) {
    delete_idea[i].addEventListener("click", (event) => {
      $("#" + event.target.parentElement.parentElement.parentElement.parentElement.id).modal('hide');
      localStorage.removeItem(event.target.parentElement.parentElement.parentElement.parentElement.id);
      event.target.parentElement.parentElement.parentElement.parentElement.parentElement.innerHTML = "";

      console.log(event);
    })
  }


console.log("Hey look in your browser console. It works!");
