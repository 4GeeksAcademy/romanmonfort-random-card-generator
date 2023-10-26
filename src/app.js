/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let arrTipe = ["♦", "♥", "♠", "♣"];
let arrNum = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let card = document.querySelector(".carta");

function randomnum(array) {
  let num = Math.floor(Math.random() * array.length);
  let selectednum = array[num];
  div2.innerHTML = selectednum;
  div2.classList.add("numero");
  card.appendChild(div2);
}

function randomtipe(array) {
  let palo = Math.floor(Math.random() * array.length);
  let selectedPalo = array[palo];

  div1.innerHTML = selectedPalo;
  div3.innerHTML = selectedPalo;

  // Eliminar todas las clases existentes
  div1.className = "tipo uno";
  div3.className = "tipo dos";

  // Agregar la clase específica del palo
  switch (selectedPalo) {
    case "♦":
      div1.classList.add("diamond");
      div3.classList.add("diamond");
      break;
    case "♥":
      div1.classList.add("heart");
      div3.classList.add("heart");
      break;
    case "♣":
      div1.classList.add("club");
      div3.classList.add("club");
      break;
    default:
      div1.classList.add("spade");
      div3.classList.add("spade");
      break;
  }

  card.appendChild(div1);
  card.appendChild(div3);
}

window.onload = function() {
  randomnum(arrNum);
  randomtipe(arrTipe);
};

let btn = document.createElement("button");
btn.innerText = "Crear carta";
btn.classList.add("btn", "btn-primary");
card.appendChild(btn);

btn.addEventListener("click", function() {
  randomnum(arrNum);
  randomtipe(arrTipe);
});

setInterval(function() {
  randomnum(arrNum);
  randomtipe(arrTipe);
}, 10000);
