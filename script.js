document.querySelector("form").addEventListener("submit", myFunction);

const min = 0 ;
const max = 100;
let randomNumber = Math.floor(Math.random() * (max-min+1)+min); 
let remainingGuesses = 10;

function myFunction(e) {
  e.preventDefault();

  const integerValue = parseInt(document.getElementById("guessField").value);

  if (isNaN(integerValue) || integerValue < 1 || integerValue > 100) {
    document.querySelector(".lowOrHi").innerText = "Please enter a number between 1 and 100.";
    return;
  }

  remainingGuesses--;
  document.querySelector(".lastResult").innerText = remainingGuesses;

  if (integerValue === randomNumber) {
    document.querySelector(".lowOrHi").innerText = "You guessed it right!";
    document.querySelector(".guesses").innerText += ` ${integerValue}`;
    return;
  } else if (integerValue > randomNumber) {
    document.querySelector(".lowOrHi").innerText = "Too high!";
  } else {
    document.querySelector(".lowOrHi").innerText = "Too low!";
  }

  document.querySelector(".guesses").innerText += ` ${integerValue}`;

  if (remainingGuesses === 0) {
    document.querySelector(".lowOrHi").innerText = `Game over! The number was ${randomNumber}.`;
    document.getElementById("subt").disabled = true;
  }
}
