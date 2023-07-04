const values = [
  "react",
  "javascript",
  "index",
  "script",
  "unity",
  "component",
  "render",
  "transform",
  "rotation",
  "java",
  "dotnet",
];
const guessWord = document.querySelector(".guess-word");
const inputWord = document.querySelector(".guesshere");
const guessBtn = document.querySelector(".guess");
const playAgainBtn = document.querySelector(".playagain");
const result = document.querySelector(".result");

let currentWordIndex = 0;
scramble();

function scramble() {
  let inputText;
  const word = values[currentWordIndex];
  const strarray = word.split("");
  let i, j, k;
  for (i = 0; i < strarray.length; i++) {
    j = Math.floor(Math.random() * (i + 1));
    k = strarray[i];
    strarray[i] = strarray[j];
    strarray[j] = k;
  }
  const scrambleword = strarray.join("");
  guessWord.innerHTML = scrambleword;

  inputWord.addEventListener("input", () => {
    inputText = inputWord.value;
  });

  playAgainBtn.addEventListener("click", () => {
    location.reload();
  });

  guessBtn.addEventListener("click", () => {
    if (inputText == word) {
      result.innerHTML = "You Guessed Right!!";
      inputWord.value = "";

      currentWordIndex++;
      if (currentWordIndex < values.length) {
        scramble();
      } else {
        result.innerHTML = "Game Over";
      }
    } else {
      result.innerHTML = "Wrong Guess";
    }
  });
}
