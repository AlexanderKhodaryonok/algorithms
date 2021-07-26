export function removeCamelCase(str) {
  const chars = [];
  for (let char of str) {
    const upperChar = char.toUpperCase();
    if (char === upperChar) {
      chars.push(" ");
      chars.push(upperChar);
    } else {
      chars.push(char);
    }
  }
  const formattedString = chars.join("");
  return formattedString;
}
