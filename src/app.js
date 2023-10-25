/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let arrTipe = ["♦", "♥", "♠", "♣"];
let arrNum = ["2", "3", "4", "5", "6", "7", "8", "9", "j", "Q", "k", "A"];

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
  div1.classList.add("tipo", "uno");
  div3.classList.add("tipo", "dos");
  card.appendChild(div1);
  card.appendChild(div3);
}

window.onload = function() {
  randomnum(arrNum);
  randomtipe(arrTipe);
};

let btn = document.createElement("button");
btn.innerText = "Crear carta";
card.appendChild(btn);

btn.addEventListener("click", function() {
  randomnum(arrNum);
  randomtipe(arrTipe);
});

setTimeout(function() {
  randomnum(arrNum);
  randomtipe(arrTipe);
}, 10000);
