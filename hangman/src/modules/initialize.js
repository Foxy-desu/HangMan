export function initialize(props) {
    function applyClass() {
      props.wrap.className = 'wrap';
      props.header.className = 'hero';
      props.main.className = 'main';
      props.imageWrap.className = 'hero__image-wrap';
      props.h1.className = 'hero__header';
      props.image.className = 'hero__image';
      props.wordWrap.className = 'word-wrap';
      props.hintWrap.className = 'hint-wrap';
      props.wordHint.className = 'hint-wrap__word-hint';
      props.guessHint.className = 'hint-wrap__guess-hint';
      props.guessHintSpan.className = 'guess-hint__mistakes-count';
      props.keyboard.className = 'keyboard';
    };
    function applyText() {
      props.h1.innerText = 'Hangman Game';
      props.hintWrap.innerText = 'Hint: ';
      props.wordHint.innerText = 'ooooh here will be the hint';
      props.guessHint.innerText = 'Incorrect guesses: ';
      props.guessHintSpan.innerText = ' / ';
    };
    function applySrc() {
      props.image.src = './assets/images/gallows.svg';
    };
    function adjustHtml() {
      props.wordWrap.insertAdjacentHTML('afterbegin', props.letterBlocks);
      props.keyboard.insertAdjacentHTML('afterbegin', props.buttons);
    };
    function insertElems() {
      props.body.append(props.wrap);
      props.wrap.append(props.header, props.main);
      props.header.append(props.imageWrap, props.h1);
      props.imageWrap.append(props.image);
      props.main.append(props.wordWrap, props.hintWrap, props.keyboard);
      props.hintWrap.append(props.wordHint, props.guessHint);
      props.guessHint.append(props.guessHintSpan);
    };
  
    applyClass();
    applyText();
    applySrc();
    adjustHtml();
    insertElems();
};