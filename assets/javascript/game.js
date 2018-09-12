  var wins = 0;
  var losses = 0;
  var guesses = 9;
  var letters = ["a", "b", "c", 'd', "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  var winsText = document.getElementById("wins-text")
  var lossesText = document.getElementById("losses-text")
  var remainingGuesses = document.getElementById("remaining-guesses")
  var guessesText = document.getElementById("guesses-text")
  var youLose = document.getElementById("you-lose")

  document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase()
    var psychicLetter = letters[Math.floor(Math.random() * letters.length)]


    if (userGuess === psychicLetter) {
      wins++;
    } else if (userGuess !== psychicLetter) {
      guesses--;
    } else if (guesses === 0) {
      losses++;
      youLose.textContent = "You lose!"
      return;
    }

    guessesText.textContent = userGuess;
    remainingGuesses.textContent = guesses;
    lossesText.textContent = losses;
    winsText.textContent = wins;
  };
