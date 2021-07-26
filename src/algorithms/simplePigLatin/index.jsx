const punctuationSymbols = [",", ".", "!", "?"];

function modifyString(char, str, index, firstLetter, addedStr) {
  if (punctuationSymbols.includes(char)) {
    return char;
  }
  if (!str[index + 1]?.trim() || punctuationSymbols.includes(char)) {
    const endChars = `${char}${firstLetter.letter}${addedStr}`;
    firstLetter.letter = "";
    return endChars;
  }
  if (!str[index - 1]?.trim()) {
    firstLetter.letter = char;
    return "";
  }
  return char;
}

export function pigIt(str) {
  let modifiedStr = "";
  let index = 0;
  let firstLetter = { letter: "" };
  let addedStr = "ay";
  for (let char of str) {
    modifiedStr =
      modifiedStr + modifyString(char, str, index, firstLetter, addedStr);
    index++;
  }
  return modifiedStr;
}
