import { createLetterBlocks, createButtons } from "./functions";

export const elems = () => {
  const body = document.body;
  const wrap = document.createElement("div");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const imageWrap = document.createElement("div");
  const h1 = document.createElement("h1");
  // const image = document.createElement("img");
  const wordWrap = document.createElement("div");
  const letterBlocks = createLetterBlocks(7);
  const hintWrap = document.createElement("div");
  const wordHint = document.createElement("span");
  const guessHint = document.createElement("p");
  const guessHintSpan = document.createElement("span");
  const keyboard = document.createElement("div");
  const buttons = createButtons();
  const canvas = document.createElement('canvas');

  return {
    body,
    wrap,
    header,
    main,
    imageWrap,
    h1,
    // image,
    wordWrap,
    letterBlocks,
    hintWrap,
    wordHint,
    guessHint,
    guessHintSpan,
    keyboard,
    buttons,
    canvas,
  };
};
