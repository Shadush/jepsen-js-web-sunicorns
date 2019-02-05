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

let idea = {

  init: function (text) {
    this.text = text;
    this.comment = [];
  },

}



function storeElement(key, text) {

  localStorage.setItem(key, text);
}

function createModal(key) {

  let div = document.createElement("div");
  let div_comment = document.createElement("div");
  div_comment.className = "div_comment";
  div.innerHTML = modal_template;
  document.querySelector(".content").appendChild(div);
  let id = document.getElementById('plans');
  div.querySelector(".btn").innerText = key;
  let modal_body = div.querySelector(".modal-body");
  let my_idea = JSON.parse(localStorage.getItem(key));
  modal_body.innerHTML = md.render(my_idea.text);
  modal_body.appendChild(div_comment);
  for(let comment of my_idea.comment){
    let p = document.createElement("p");
    p.innerText = comment;
    div_comment.appendChild(p);
  }
  id.dataset.target = "#" + key;
  id.id = "#" + key;
  document.querySelector("#PLANS").id = key;
}

var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();
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

const form_template =`
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Your plan to conquer the world</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  <button type="submit" class="btn btn-primary mb-2">Submit</button>
                </div>`;


let text = `# Snowmania
## byRomain
The *goal* is to make snow fall **perpetually** so that people will always have their houses covered in snow. As they are all outside they\’ll make snowfights non stop. Having nowhere to live/ warm up they will be freezing to death or die of hypothermia.`;
let text2 = "# Becode is love \n## bySouSou \nMass produce the becode condoms so that the world population rise up steadily. Ten or so years laters the population will more than double. The CO2 quantity in the atmosphere will explode, acidic rain and unhealthy air quality becoming the usual standard. Fifty years later the planet will ends up overusing its resources and the world would start its fall.";
let text3 = "# Plan42 to conquer the world  \n## by SouSou  \nSince we are such good devs (and hackers), we can easily infiltrate databases around the world. Not random and futile ones but the databases which store the most embarrassing stuff you can imagine.  I talk photos you send to your SO, your face when you went to prom (#blunderyears).  Nobody is safe : Snapchat, Facebook, ... I said nobody is safe. When we have the good stuff, we can blackmail anyone to get what we want.";
let text4 = "# Conquer the world \n## By Stéphanie  \nConquer the world by destroying large societies to take their database ! If they aren\’t willing, take their families hostage.";
let text5 = "# Animals! \n## By Stéphanie \nAnimals will conquer the world. They will scheme to replace humans as society leaders. And lead the world to do whatever they want with it. Humans will be the slaves of animals.";
let text6 = "# Opération Folamour \n## Take control of all the nuclear warheads on the planet.\nAfter blowing up several of the world\’s largest cities.... It will be easier to ask for full control of the world.";
var nbvisites = localStorage.getItem('visites');

if (nbvisites == null) {
  let idea_one = Object.create(idea);
  idea_one.init(text);
  let idea_two = Object.create(idea);
  idea_two.init(text2);
  let idea_three = Object.create(idea);
  idea_three.init(text3);
  let idea_four = Object.create(idea);
  idea_four.init(text4);
  let idea_five = Object.create(idea);
  idea_five.init(text5);
  let idea_six = Object.create(idea);
  idea_six.init(text6);



  storeElement('Snowmania', JSON.stringify(idea_one));
  storeElement('Becode_is_love', JSON.stringify(idea_two));
  storeElement('Plan_42', JSON.stringify(idea_three));
  storeElement('Conquer_the_world', JSON.stringify(idea_four));
  storeElement('Animals', JSON.stringify(idea_five));
  storeElement('Folamour', JSON.stringify(idea_six));
  nbvisites = 1;
  storeElement('visites', 1);

}

//localStorage.clear();





for (let i = 0; i < localStorage.length; i++) {

  if (localStorage.key(i) != 'visites') {
    createModal(localStorage.key(i));
  }
}


let comment_idea =  document.querySelectorAll(".btn-outline-primary");

for (let i = 0; i < comment_idea.length; i++){

  comment_idea[i].addEventListener("click", (event) => {
    let edit_selector = event.target.closest(".modal-content").childNodes[3];
    let key = event.target.closest(".modal.fade").id;
    let form = document.createElement("form");
    form.innerHTML = form_template;
    edit_selector.appendChild(form);
    form.querySelector(".mb-2").addEventListener("click", () =>{
      let comment = form.querySelector(".form-control").value;
      let my_idea = JSON.parse(localStorage.getItem(key));
      my_idea.comment.push(comment);
      localStorage.removeItem(key);
      localStorage.setItem(key, JSON.stringify(my_idea));
    })
  })
}


let edit_idea = document.querySelectorAll(".btn-outline-success");

for (let i = 0; i < edit_idea.length; i++){

  edit_idea[i].addEventListener("click", (event) => {
  let edit_selector = event.target.closest(".modal-content").childNodes[3];
  let key = event.target.closest(".modal.fade").id;
  let form = document.createElement("form");
  form.innerHTML = form_template;
  form.querySelector(".form-control").value = JSON.parse(localStorage.getItem(key)).text;
  edit_selector.appendChild(form);
  form.querySelector(".mb-2").addEventListener("click", () =>{
    let text = form.querySelector(".form-control").value;
    let my_idea = JSON.parse(localStorage.getItem(key));
    my_idea.text = text;
    localStorage.removeItem(key);

    localStorage.setItem(key, JSON.stringify(my_idea));
    edit_selector.innerHTML=md.render(text);
    })

  })

}

let delete_idea = document.querySelectorAll(".btn-outline-danger");

  for (let i = 0; i < delete_idea.length; i++) {
      delete_idea[i].addEventListener("click", (event) => {
      let selector  = event.target.closest(".modal.fade").id;
      $("#" + selector).modal('hide');
      localStorage.removeItem(selector);
      event.target.closest(".modal.fade").parentElement.innerHTML = "";
    })
}

document.querySelector(".mb-2").addEventListener("click", () => {

  let key = document.querySelector(".form-control").value;
  let text = document.querySelector("#exampleFormControlTextarea1").value;

  if((key != "") && (text != "")) {

    key = key.replace(/\s+/g, '_');
    let my_idea = Object.create(idea);
    my_idea.init(text);
    localStorage.setItem(key, JSON.stringify(my_idea));
    createModal(key);
  }
})
