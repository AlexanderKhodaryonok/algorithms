// rewrite with reverse
function reverseArray(arr) {
  let charIndex = arr.length - 1;
  const reversedArray = [];
  arr.forEach(() => {
    const item = arr[charIndex];
    reversedArray.push(item);
    charIndex--;
  });
  return reversedArray;
}

export function reverseString(str) {
  const splittedString = str.split("");
  return reverseArray(splittedString).join('');
}
