// Generate random number for left dice (1-6)
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.getElementById("left-dice").setAttribute("src", randomDiceImage1);

// Generate random number for right dice (1-6)
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.getElementById("right-dice").setAttribute("src", randomDiceImage2);


// Decide the winner and change the <h1> text
var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.innerHTML = "Player 2 Wins! 🚩";
} else {
  heading.innerHTML = "Draw!";
}