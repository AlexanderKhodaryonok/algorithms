export function checkBracketsRec(str) {
  const chars = str.split("");
  for (let i = 0; i < chars.length - 1; i++) {
    const isRoundBracketsClosed = chars[i] === "(" && chars[i + 1] === ")";
    const isSquareBracketsClosed = chars[i] === "[" && chars[i + 1] === "]";
    const isCurlyBracketsClosed = chars[i] === "{" && chars[i + 1] === "}";
    const isBracketsClosed =
      isRoundBracketsClosed || isSquareBracketsClosed || isCurlyBracketsClosed;
    if (isBracketsClosed && chars.length === 2) {
      return true;
    }
    if (chars.length > 2 && isBracketsClosed) {
      chars.splice(i, 2);
      return checkBracketsRec(chars.join(""));
    }
  }
  return false;
}

export function checkBracketsCounter(str) {
  let counter = 0;
  for (const char of str) {
    if (char === "(") {
      counter++;
    } else if (char === ")") {
      counter--;
    }
    if (counter === -1) {
      return false;
    }
  }
  return counter === 0;
}

export function checkBracketsStack(str) {
  const stack = [];
  const brackets = ["[]", "{}", "()"];
  const openedChars = ['[', '{', '('];
  const closedChars = [']', '}', ')'];
  for (let char of str) {
    if (openedChars.includes(char)) {
      stack.push(char);
    }
    if (closedChars.includes(char)) {
      const deletedChar = stack.pop();
      const comparedChar = brackets.find((item) => item.includes(char))[0];
      if (deletedChar !== comparedChar) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
