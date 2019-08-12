var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImageLeft = "images/dice" + randomNumber1 + ".png";
var randomDiceImageRight = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageLeft);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageRight);


if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}

console.log(randomNumber1);
console.log(randomNumber2);
