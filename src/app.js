/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Array de elementos-----------------------------------------
  let emojis = ["♦", "♥", "♠", "♣"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  //Funciones random-----------------------------------------

  let randomFunctionNumber = Math.floor(Math.random() * 12);
  let randomFunctionEmoji = Math.floor(Math.random() * 4);

  //Generación aleatoria de elementos-------------------------

  let randomValues = values[randomFunctionNumber];
  let randomEmoji = emojis[randomFunctionEmoji];

  // busca elemento con ese ID ----------sustituye--- por esto (var randomNumber)
  document.querySelector("#randomNumber").innerHTML = randomValues;
  document.querySelector("#randomEmoji").innerHTML = randomEmoji;
  document.querySelector("#randomEmojiTwo").innerHTML = randomEmoji;

  //condición para cambiar clases a elementos

  if (randomFunctionEmoji == 0 || randomFunctionEmoji == 1) {
    let elementFirst = document.querySelector("#randomNumber");
    let elementSecond = document.querySelector("#randomEmoji");
    let elementThird = document.querySelector("#randomEmojiTwo");

    elementFirst.style.color = "red";
    elementSecond.style.color = "red";
    elementThird.style.color = "red";
  }
};
