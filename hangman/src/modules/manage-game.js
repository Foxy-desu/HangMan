import { chooseWord, createLetterBlocks } from "./functions";

export function manageGame(wordObj, elements) {
    let currentWord = chooseWord(wordObj);
    let wordLen = currentWord.word.length;
  
    let mistakes = 0;
    let totalPossibleMistakes = 6; //equals the number of bodyparts of the hangman
    let rightAnswers = 0;
  
    let currentLetter;

    function insertWordBlocks() {
        const letterBlocks = createLetterBlocks(wordLen);
        elements.wordWrap.innerHTML = letterBlocks;
    };
    function insertWordHint() {
    const hint = currentWord.wordHint;
    elements.wordHint.innerText = hint;
    };
    function insertGuessHint() {
    const wrong = mistakes;
    const total = totalPossibleMistakes;
    elements.guessHintSpan.innerText = `${wrong} / ${total}`;
    };
    function countChecker() {
        elements.guessHintSpan.innerText = `${mistakes} / ${totalPossibleMistakes}`;
        function blockKeys() {
            Array.from(elements.keyboard.children).forEach((key) => {
                key.classList.add('keyboard__button_active');
                key.setAttribute('disabled','');
            })
        }
    //runs on btn click
    if(mistakes === totalPossibleMistakes) {
        blockKeys();
        setTimeout(resetGame, 5000);
        //run function to create a modal window for loosing the game
        //with a button to start a new game;
    }
    if(rightAnswers === wordLen) {
        blockKeys();
        setTimeout(resetGame, 5000);
        //run a function to create a modal for winning the game
        //with a button to start a new one;
    }
    else return;
    };
    function letterChecker() {
    const letterBlocks = elements.wordWrap.children;
    const wordArr = currentWord.word.toUpperCase().split('');
        
    if (wordArr.includes(currentLetter)) {
        wordArr.forEach((letter, index) => {
        if (currentLetter === letter) {
            letterBlocks[index].innerText = currentLetter.toLowerCase();
                rightAnswers ++;
                console.log(rightAnswers);
            }
        }
        );
    } else {
        mistakes ++;
        console.log(mistakes);
    }
    };
    function keyboardHandler(e) {
        const currentButton = e.target.closest('.keyboard__button');
        if(currentButton) {
           currentButton.classList.add('keyboard__button_active');
            currentButton.setAttribute('disabled', '');
            currentLetter = currentButton.innerText;
            letterChecker(); 
            countChecker();
        } else return;
    };

    elements.keyboard.addEventListener('click', keyboardHandler);
     
    insertWordBlocks();
    insertWordHint();
    insertGuessHint(); 
  
}