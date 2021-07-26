export function countChars(str) {
  let obj = {};
  for (let char of str) {
    if (!obj.hasOwnProperty(char)) {
      obj[char] = 1
    } else {
      obj[char]++
    };
  }
  return obj;
}
