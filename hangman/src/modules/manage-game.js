import { chooseWord, createLetterBlocks } from "./functions";
import { popupElements } from "./popup";
import { insertPopup, removePopup } from "./functions";
import { drawHangman } from "./canvas";
import { canvasCreator } from "./canvas";
import {checkKeyboard} from "./layoutChecker";

export function manageGame(wordObj, elements) {
  const {initialDrawing, clearCanvas} = canvasCreator(elements.canvas);
  
  let currentWord = chooseWord(wordObj);
  let wordLen = currentWord.word.length;

  let hitBtns = new Set();
  let mistakesCount = 0;
  let totalPossibleMistakesCount = 6; //equals the number of bodyparts of the hangman
  let rightAnswers = 0;

  let currentLetter;

  function insertWordBlocks() {
    const letterBlocks = createLetterBlocks(wordLen);
    elements.wordWrap.innerHTML = letterBlocks;
  }
  function insertWordHint() {
    const hint = currentWord.wordHint;
    elements.wordHint.innerText = hint;
  }
  function insertGuessHint() {
    const wrong = mistakesCount;
    const total = totalPossibleMistakesCount;
    elements.guessHintSpan.innerText = `${wrong} / ${total}`;
  }
  function countChecker() {
    elements.guessHintSpan.innerText = `${mistakesCount} / ${totalPossibleMistakesCount}`;
    const popupElems = popupElements();

    function blockKeys() {
      Array.from(elements.keyboard.children).forEach((key) => {
        key.classList.add("keyboard__button_active");
        key.setAttribute("disabled", "");
      });
    }
    function insertText(heading, details) {
      popupElems.messageHeading.innerText = heading;
      popupElems.messageDetails.innerText = details;
      popupElems.newGameBtn.innerText = "Start new game";
    }
    //runs on btn click
    if (mistakesCount === totalPossibleMistakesCount) {
      blockKeys();
      setTimeout(() => {
        insertPopup(popupElems);
        insertText(`Game Over`, `The word was ${currentWord.word}`);
        popupElems.newGameBtn.addEventListener("click", () => {
          resetGame();
          removePopup(popupElems);
        });
      }, 1000);
      //run function to create a modal window for loosing the game
      //with a button to start a new game;
    }
    if (rightAnswers === wordLen) {
      blockKeys();
      setTimeout(() => {
        insertPopup(popupElems);
        insertText(`You Win!`, `The word is ${currentWord.word}`);
        popupElems.newGameBtn.addEventListener("click", () => {
          resetGame();
          removePopup(popupElems);
        });
      }, 1000);
      //run a function to create a modal for winning the game
      //with a button to start a new one;
    } else return;
  }
  function letterChecker() {
    const letterBlocks = elements.wordWrap.children;
    const wordArr = currentWord.word.toUpperCase().split("");

    if (wordArr.includes(currentLetter)) {
      wordArr.forEach((letter, index) => {
        if (currentLetter === letter) {
          letterBlocks[index].innerText = currentLetter.toLowerCase();
          rightAnswers++;
          console.log(rightAnswers);
        }
      });
    } else {
      mistakesCount++;
      drawHangman(mistakesCount, elements.canvas);
      console.log(mistakesCount);
    }
  }
  function keyboardHandler(e) {
    const currentButton = e.target.closest(".keyboard__button");
    if (currentButton) {
      currentButton.classList.add("keyboard__button_active");
      currentButton.setAttribute("disabled", "");
      currentLetter = currentButton.innerText;
      letterChecker();
      countChecker();
      hitBtns.add(currentButton.innerText.toLowerCase());
    } else return;
  }
  function physicKeysHandler(e) {
    // e = e || window.event;
    const isEnglish = checkKeyboard(e);
    if(isEnglish) {
      const charCode = e.keyCode;
    const charStr = String.fromCharCode(charCode);
    console.log(charStr);

    function findBtn() {
      const buttons = Array.from(elements.keyboard.children);
      buttons.forEach((btn) => {
        if (btn.id === charStr && !hitBtns.has(charStr)) {
          btn.classList.add("keyboard__button_active");
          btn.setAttribute("disabled", "");
          currentLetter = btn.innerText;
          hitBtns.add(charStr);
          letterChecker();
          countChecker();
        } else return;
      });
    }
    findBtn();
    } else return
    
  }
  function resetGame() {
    resetParams();
    resetKeyboard();
    resetWord();
    insertWordBlocks();
    insertWordHint();
    insertGuessHint();
    clearCanvas();
    initialDrawing();
  }
  function resetKeyboard() {
    Array.from(elements.keyboard.children).forEach((key) => {
      key.classList.remove("keyboard__button_active");
      key.removeAttribute("disabled");
    });
  }
  function resetParams() {
    mistakesCount = 0;
    rightAnswers = 0;
    currentLetter = "";
    hitBtns.clear();
  }
  function resetWord() {
    currentWord = chooseWord(wordObj);
    wordLen = currentWord.word.length;
  }

  elements.keyboard.addEventListener("click", keyboardHandler);
  document.addEventListener("keypress", physicKeysHandler);
  initialDrawing();
  insertWordBlocks();
  insertWordHint();
  insertGuessHint();
  console.log('initialize');
}
