const values = [
  {
    name: "react",
    hint: "Hint: javaScript library",
  },
  {
    name: "javascript",
    hint: " Hint: scripting language",
  },
  {
    name: "unity",
    hint: "Hint: 2D/3D engine and framework",
  },
  {
    name: "flutter",
    hint: "Hint: Google's portable UI toolkit",
  },
  {
    name: "java",
    hint: "Hint: multi-platform, object-oriented, and network-centric language ",
  },
];
const guessWord = document.querySelector(".guess-word");
const inputWord = document.querySelector(".guesshere");
const guessBtn = document.querySelector(".guess");
const playAgainBtn = document.querySelector(".playagain");
const result = document.querySelector(".result");
const hintShow = document.querySelector(".hintshow");
const hintBtn = document.querySelector(".hintbtn");

let currentWordIndex = 0;
scramble();

function scramble() {
  let inputText;
  const word = values[currentWordIndex].name;
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

  hintBtn.addEventListener("click", () => {
    hintShow.innerHTML = values[currentWordIndex].hint;
  });

  guessBtn.addEventListener("click", () => {
    if (inputText == word) {
      result.innerHTML = "You Guessed Right!!";
      inputWord.value = "";
      hintShow.innerHTML = "";
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
