/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/words */ \"./src/modules/words.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_initialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initialize */ \"./src/modules/initialize.js\");\n/* harmony import */ var _modules_manage_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/manage-game */ \"./src/modules/manage-game.js\");\n\n\n\n\nconst elements = (0,_modules_dom__WEBPACK_IMPORTED_MODULE_1__.elems)();\n(0,_modules_initialize__WEBPACK_IMPORTED_MODULE_2__.initialize)(elements);\n(0,_modules_manage_game__WEBPACK_IMPORTED_MODULE_3__.manageGame)(_modules_words__WEBPACK_IMPORTED_MODULE_0__.words, elements);\n\n//# sourceURL=webpack://hangman/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   elems: () => (/* binding */ elems)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/modules/functions.js\");\n\nconst elems = () => {\n  const body = document.body;\n  const wrap = document.createElement(\"div\");\n  const header = document.createElement(\"header\");\n  const main = document.createElement(\"main\");\n  const imageWrap = document.createElement(\"div\");\n  const h1 = document.createElement(\"h1\");\n  const image = document.createElement(\"img\");\n  const wordWrap = document.createElement(\"div\");\n  const letterBlocks = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createLetterBlocks)(7);\n  const hintWrap = document.createElement(\"div\");\n  const wordHint = document.createElement(\"span\");\n  const guessHint = document.createElement(\"p\");\n  const guessHintSpan = document.createElement(\"span\");\n  const keyboard = document.createElement(\"div\");\n  const buttons = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createButtons)();\n  return {\n    body,\n    wrap,\n    header,\n    main,\n    imageWrap,\n    h1,\n    image,\n    wordWrap,\n    letterBlocks,\n    hintWrap,\n    wordHint,\n    guessHint,\n    guessHintSpan,\n    keyboard,\n    buttons\n  };\n};\n\n//# sourceURL=webpack://hangman/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chooseWord: () => (/* binding */ chooseWord),\n/* harmony export */   createButtons: () => (/* binding */ createButtons),\n/* harmony export */   createLetterBlocks: () => (/* binding */ createLetterBlocks),\n/* harmony export */   insertPopup: () => (/* binding */ insertPopup),\n/* harmony export */   removePopup: () => (/* binding */ removePopup)\n/* harmony export */ });\nfunction createButtons() {\n  const abc = \"abcdefghijklmnopqrstuvwxyz\".split(\"\");\n  const generateButton = value => {\n    return `<button class=\"keyboard__button\" id=\"${value}\">${value.toUpperCase()}</button>`;\n  };\n  return abc.map(letter => {\n    return generateButton(letter);\n  }).join(\"\");\n}\nfunction createLetterBlocks(count) {\n  const generateBlock = id => {\n    return `<span class=\"word-wrap__letter-block\" id=\"${id}\">x</span>`;\n  };\n  const blocks = [];\n  for (let i = 0; i <= count - 1; i++) {\n    blocks.push(generateBlock(i));\n  }\n  return blocks.join(\"\");\n}\nfunction chooseWord(words) {\n  function generateRandomInteger(max) {\n    return Math.floor(Math.random() * max) + 1;\n  }\n  function getWordObject(obj) {\n    const index = generateRandomInteger(obj.length);\n    return obj[index - 1];\n  }\n  const result = getWordObject(words);\n  console.log(result);\n  return result;\n}\nfunction insertPopup(popupCreator) {\n  const elems = popupCreator;\n  function applyClassname() {\n    elems.popup.className = \"popup\";\n    elems.modal.className = \"modal\";\n    elems.newGameBtn.className = \"modal__btn\";\n    elems.messageWrap.className = \"modal__msg\";\n    elems.messageHeading.className = \"modal__msgHeading\";\n    elems.messageDetails.className = \"modal__msgDetails\";\n  }\n  applyClassname();\n  function appendElems() {\n    document.body.append(elems.popup);\n    elems.popup.append(elems.modal);\n    elems.modal.append(elems.messageWrap, elems.newGameBtn);\n    elems.messageWrap.append(elems.messageHeading, elems.messageDetails);\n  }\n  appendElems();\n}\nfunction removePopup(popupCreator) {\n  const elems = popupCreator;\n  elems.popup.remove();\n}\n\n//# sourceURL=webpack://hangman/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/initialize.js":
/*!***********************************!*\
  !*** ./src/modules/initialize.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialize: () => (/* binding */ initialize)\n/* harmony export */ });\nfunction initialize(props) {\n  function applyClass() {\n    props.wrap.className = \"wrap\";\n    props.header.className = \"hero\";\n    props.main.className = \"main\";\n    props.imageWrap.className = \"hero__image-wrap\";\n    props.h1.className = \"hero__header\";\n    props.image.className = \"hero__image\";\n    props.wordWrap.className = \"word-wrap\";\n    props.hintWrap.className = \"hint-wrap\";\n    props.wordHint.className = \"hint-wrap__word-hint\";\n    props.guessHint.className = \"hint-wrap__guess-hint\";\n    props.guessHintSpan.className = \"guess-hint__mistakes-count\";\n    props.keyboard.className = \"keyboard\";\n  }\n  function applyText() {\n    props.h1.innerText = \"Hangman Game\";\n    props.hintWrap.innerText = \"Hint: \";\n    props.wordHint.innerText = \"ooooh here will be the hint\";\n    props.guessHint.innerText = \"Incorrect guesses: \";\n    props.guessHintSpan.innerText = \" / \";\n  }\n  function applySrc() {\n    props.image.src = \"./assets/images/gallows.svg\";\n  }\n  function adjustHtml() {\n    props.wordWrap.insertAdjacentHTML(\"afterbegin\", props.letterBlocks);\n    props.keyboard.insertAdjacentHTML(\"afterbegin\", props.buttons);\n  }\n  function insertElems() {\n    props.body.append(props.wrap);\n    props.wrap.append(props.header, props.main);\n    props.header.append(props.imageWrap, props.h1);\n    props.imageWrap.append(props.image);\n    props.main.append(props.wordWrap, props.hintWrap, props.keyboard);\n    props.hintWrap.append(props.wordHint, props.guessHint);\n    props.guessHint.append(props.guessHintSpan);\n  }\n  applyClass();\n  applyText();\n  applySrc();\n  adjustHtml();\n  insertElems();\n}\n\n//# sourceURL=webpack://hangman/./src/modules/initialize.js?");

/***/ }),

/***/ "./src/modules/manage-game.js":
/*!************************************!*\
  !*** ./src/modules/manage-game.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   manageGame: () => (/* binding */ manageGame)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/modules/functions.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ \"./src/modules/popup.js\");\n\n\n\nfunction manageGame(wordObj, elements) {\n  let currentWord = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.chooseWord)(wordObj);\n  let wordLen = currentWord.word.length;\n  let hitBtns = new Set();\n  let mistakesCount = 0;\n  let totalPossibleMistakesCount = 6; //equals the number of bodyparts of the hangman\n  let rightAnswers = 0;\n  let currentLetter;\n  function insertWordBlocks() {\n    const letterBlocks = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createLetterBlocks)(wordLen);\n    elements.wordWrap.innerHTML = letterBlocks;\n  }\n  function insertWordHint() {\n    const hint = currentWord.wordHint;\n    elements.wordHint.innerText = hint;\n  }\n  function insertGuessHint() {\n    const wrong = mistakesCount;\n    const total = totalPossibleMistakesCount;\n    elements.guessHintSpan.innerText = `${wrong} / ${total}`;\n  }\n  function countChecker() {\n    elements.guessHintSpan.innerText = `${mistakesCount} / ${totalPossibleMistakesCount}`;\n    const popupElems = (0,_popup__WEBPACK_IMPORTED_MODULE_1__.popupElements)();\n    function blockKeys() {\n      Array.from(elements.keyboard.children).forEach(key => {\n        key.classList.add(\"keyboard__button_active\");\n        key.setAttribute(\"disabled\", \"\");\n      });\n    }\n    function insertText(heading, details) {\n      popupElems.messageHeading.innerText = heading;\n      popupElems.messageDetails.innerText = details;\n      popupElems.newGameBtn.innerText = \"Start new game\";\n    }\n    //runs on btn click\n    if (mistakesCount === totalPossibleMistakesCount) {\n      blockKeys();\n      setTimeout(() => {\n        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.insertPopup)(popupElems);\n        insertText(`Game Over`, `The word was ${currentWord.word}`);\n        popupElems.newGameBtn.addEventListener(\"click\", () => {\n          resetGame();\n          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.removePopup)(popupElems);\n        });\n      }, 1000);\n      //run function to create a modal window for loosing the game\n      //with a button to start a new game;\n    }\n    if (rightAnswers === wordLen) {\n      blockKeys();\n      setTimeout(() => {\n        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.insertPopup)(popupElems);\n        insertText(`You Win!`, `The word is ${currentWord.word}`);\n        popupElems.newGameBtn.addEventListener(\"click\", () => {\n          resetGame();\n          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.removePopup)(popupElems);\n        });\n      }, 1000);\n      //run a function to create a modal for winning the game\n      //with a button to start a new one;\n    } else return;\n  }\n  function letterChecker() {\n    const letterBlocks = elements.wordWrap.children;\n    const wordArr = currentWord.word.toUpperCase().split(\"\");\n    if (wordArr.includes(currentLetter)) {\n      wordArr.forEach((letter, index) => {\n        if (currentLetter === letter) {\n          letterBlocks[index].innerText = currentLetter.toLowerCase();\n          rightAnswers++;\n          console.log(rightAnswers);\n        }\n      });\n    } else {\n      mistakesCount++;\n      console.log(mistakesCount);\n    }\n  }\n  function keyboardHandler(e) {\n    const currentButton = e.target.closest(\".keyboard__button\");\n    if (currentButton) {\n      currentButton.classList.add(\"keyboard__button_active\");\n      currentButton.setAttribute(\"disabled\", \"\");\n      currentLetter = currentButton.innerText;\n      letterChecker();\n      countChecker();\n    } else return;\n  }\n  function physicKeysHandler(e) {\n    // e = e || window.event;\n    const charCode = e.keyCode;\n    const charStr = String.fromCharCode(charCode);\n    console.log(charStr);\n    function findBtn() {\n      const buttons = Array.from(elements.keyboard.children);\n      buttons.forEach(btn => {\n        if (btn.id === charStr && !hitBtns.has(charStr)) {\n          btn.classList.add(\"keyboard__button_active\");\n          btn.setAttribute(\"disabled\", \"\");\n          currentLetter = btn.innerText;\n          hitBtns.add(charStr);\n          letterChecker();\n          countChecker();\n        } else return;\n      });\n    }\n    findBtn();\n  }\n  function resetGame() {\n    resetParams();\n    resetKeyboard();\n    resetWord();\n    insertWordBlocks();\n    insertWordHint();\n    insertGuessHint();\n  }\n  function resetKeyboard() {\n    Array.from(elements.keyboard.children).forEach(key => {\n      key.classList.remove(\"keyboard__button_active\");\n      key.removeAttribute(\"disabled\");\n    });\n  }\n  function resetParams() {\n    mistakesCount = 0;\n    rightAnswers = 0;\n    currentLetter = \"\";\n    hitBtns.clear();\n  }\n  function resetWord() {\n    currentWord = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.chooseWord)(wordObj);\n    wordLen = currentWord.word.length;\n  }\n  elements.keyboard.addEventListener(\"click\", keyboardHandler);\n  document.addEventListener(\"keypress\", physicKeysHandler);\n  insertWordBlocks();\n  insertWordHint();\n  insertGuessHint();\n}\n\n//# sourceURL=webpack://hangman/./src/modules/manage-game.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   popupElements: () => (/* binding */ popupElements)\n/* harmony export */ });\nconst popupElements = () => {\n  const popup = document.createElement(\"div\");\n  const modal = document.createElement(\"div\");\n  const newGameBtn = document.createElement(\"button\");\n  const messageWrap = document.createElement(\"section\");\n  const messageHeading = document.createElement(\"h2\");\n  const messageDetails = document.createElement(\"p\");\n  return {\n    popup,\n    modal,\n    newGameBtn,\n    messageWrap,\n    messageHeading,\n    messageDetails\n  };\n};\n\n//# sourceURL=webpack://hangman/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/words.js":
/*!******************************!*\
  !*** ./src/modules/words.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   words: () => (/* binding */ words)\n/* harmony export */ });\nconst words = [{\n  wordId: 0,\n  wordHint: \"a tool to put all your js modules together\",\n  word: \"bundler\"\n}, {\n  wordId: 1,\n  wordHint: \"a reusable piece of code which exposes public API and keeps implementation details incapsulated\",\n  word: \"module\"\n}, {\n  wordId: 2,\n  wordHint: \"a tool that analyzes source code for errors, vulnerabilities, and stylistic issues to improve code quality\",\n  word: \"linter\"\n}, {\n  wordId: 3,\n  wordHint: \"structure that provides a base for the application development process\",\n  word: \"framework\"\n}, {\n  wordId: 4,\n  wordHint: \"sequence of instructions that is interpreted or carried out by another program\",\n  word: \"script\"\n}, {\n  wordId: 5,\n  wordHint: \"moving of function declarations to the top of their scope\",\n  word: \"hoisting\"\n}, {\n  wordId: 6,\n  wordHint: \"propagation of an event up to ancestor elements\",\n  word: \"bubbling\"\n}, {\n  wordId: 7,\n  wordHint: \"combination of a function enclosed with references to its surrounding state\",\n  word: \"closure\"\n}, {\n  wordId: 8,\n  wordHint: \"current context of code, which determines the accessibility of variables\",\n  word: \"scope\"\n}, {\n  wordId: 9,\n  wordHint: \"named abstract storage location for a value that can change\",\n  word: \"variable\"\n}];\n\n//# sourceURL=webpack://hangman/./src/modules/words.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;