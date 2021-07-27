const punctuationSymbols = [",", ".", "!", "?"];

// Solution with string

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

export function pigItByStr(str) {
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

// Solution with array

function splitString(str) {
  let punctuationSymbol = '';
  const lastSymbolIndex = str.length - 1;
  if(punctuationSymbols.includes(str[lastSymbolIndex]) && str.length > 1 ) {
    punctuationSymbol = str[lastSymbolIndex];
    const formattedStr = str.slice(0, lastSymbolIndex);
    return { punctuationSymbol, formattedStr };
  }
  return { punctuationSymbol, formattedStr: str };
}

function modifyWord(str) {
  const { punctuationSymbol, formattedStr } = splitString(str)
  if(!punctuationSymbols.includes(formattedStr)) {
    const modifiedWord = `${formattedStr.slice(1)}${formattedStr[0]}ay${punctuationSymbol}`;
    return modifiedWord;
  };
  return str
}

export function pigIt(str) {
  const arr = str.split(' ');
  const modifiedArray = arr.map(modifyWord);
  const modifiedStr = modifiedArray.join(' ');
  return modifiedStr;
}
