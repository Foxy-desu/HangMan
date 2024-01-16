export function createButtons() {
  const abc = "abcdefghijklmnopqrstuvwxyz".split("");
  const generateButton = (value) => {
    return `<button class="keyboard__button" id="${value}">${value.toUpperCase()}</button>`;
  };
  return abc
    .map((letter) => {
      return generateButton(letter);
    })
    .join("");
}
export function createLetterBlocks(count) {
  const generateBlock = (id) => {
    return `<span class="word-wrap__letter-block" id="${id}">_</span>`;
  };

  const blocks = [];
  for (let i = 0; i <= count - 1; i++) {
    blocks.push(generateBlock(i));
  }
  return blocks.join("");
}
export function chooseWord(words) {
  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function getWordObject(obj) {
    const index = generateRandomInteger(obj.length);
    return obj[index - 1];
  }

  const result = getWordObject(words);
  return result;
}
export function insertPopup(popupCreator) {
  const elems = popupCreator;

  function applyClassname() {
    elems.popup.className = "popup";
    elems.modal.className = "modal";
    elems.newGameBtn.className = "modal__btn";
    elems.messageWrap.className = "modal__msg";
    elems.messageHeading.className = "modal__msgHeading";
    elems.messageDetails.className = "modal__msgDetails";
  }
  applyClassname();

  function appendElems() {
    document.body.append(elems.popup);
    elems.popup.append(elems.modal);
    elems.modal.append(elems.messageWrap, elems.newGameBtn);
    elems.messageWrap.append(elems.messageHeading, elems.messageDetails);
  }
  appendElems();
  elems.newGameBtn.focus();
}
export function removePopup(popupCreator) {
  const elems = popupCreator;
  elems.popup.remove();
}
