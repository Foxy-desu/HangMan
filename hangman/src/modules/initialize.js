import { canvasCreator } from "./canvas";

export function initialize(props) {
  const {initialDrawing} = canvasCreator(props.canvas);

  function applyClass() {
    props.wrap.className = "wrap";
    props.header.className = "hero";
    props.main.className = "main";
    props.imageWrap.className = "hero__image-wrap";
    props.h1.className = "hero__header";
    // props.image.className = "hero__image";// replace this element with canvas
    props.wordWrap.className = "word-wrap";
    props.hintWrap.className = "hint-wrap";
    props.wordHint.className = "hint-wrap__word-hint";
    props.guessHint.className = "hint-wrap__guess-hint";
    props.guessHintSpan.className = "guess-hint__mistakes-count";
    props.keyboard.className = "keyboard";
    props.canvas.className = "hero__canvas";
  }
  function applyText() {
    props.h1.innerText = "Hangman Game";
    props.hintWrap.innerText = "Hint: ";
    props.wordHint.innerText = "ooooh here will be the hint";
    props.guessHint.innerText = "Incorrect guesses: ";
    props.guessHintSpan.innerText = " / ";
  }
  function applySize() {
    props.canvas.width = 300;
    props.canvas.height = 300;
  }
  // function applySrc() {
  //   props.image.src = "./assets/images/gallows.svg";
  // }
  function adjustHtml() {
    props.wordWrap.insertAdjacentHTML("afterbegin", props.letterBlocks);
    props.keyboard.insertAdjacentHTML("afterbegin", props.buttons);
  }
  function insertElems() {
    props.body.append(props.wrap);
    props.wrap.append(props.header, props.main);
    props.header.append(props.imageWrap, props.h1);
    props.imageWrap.append(props.canvas); //replaced image with canvas
    props.main.append(props.wordWrap, props.hintWrap, props.keyboard);
    props.hintWrap.append(props.wordHint, props.guessHint);
    props.guessHint.append(props.guessHintSpan);
  }

  applyClass();
  applySize();
  applyText();
  // applySrc();
  adjustHtml();
  insertElems();
  // initialDrawing();
}
