/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generadorDeCarta();
};

function generadorDeCarta() {
  let simbolos = ["♦", "♥", "♠", "♣"];
  let numeros = ["A", "J", "Q", "K", "2", "3", "4", "5", "6", "7", "8", "9"];

  let randonSimbolos = simbolos[Math.floor(Math.random() * simbolos.length)];
  let randonNumeros = numeros[Math.floor(Math.random() * numeros.length)];

  let color;
  if (randonSimbolos === "♦" || randonSimbolos === "♥") {
    color = "red";
  } else {
    color = "black";
  }

  document.getElementById("simbolo").innerText = randonSimbolos;
  document.getElementById("simbolo").style.color = color;

  document.getElementById("simbolo2").innerText = randonSimbolos;
  document.getElementById("simbolo2").style.color = color;

  document.getElementById("numero").innerText = randonNumeros;
  document.getElementById("numero").style.color = color;
}
