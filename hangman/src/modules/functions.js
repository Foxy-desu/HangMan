export function createButtons() {
  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const generateButton = (value) => {
    return `<button class="keyboard__button" id="${value}">${value.toUpperCase()}</button>`
  }
  return abc.map((letter) => {
    return generateButton(letter);
  }).join('');
};
export function createLetterBlocks(count) {
  const generateBlock = (id)=> {
    return `<span class="word-wrap__letter-block" id="${id}">x</span>`
  };
  
  const blocks = [];
  for(let i = 0; i <= count - 1; i++) {
    blocks.push(generateBlock(i));
  }
  return blocks.join('');
};
export function chooseWord(words){
  function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
  };

  function getWordObject(obj) {
    const index = generateRandomInteger(obj.length);
    return obj[index - 1];
  };
  
  const result = getWordObject(words)
  console.log(result);
  return result;
};
