export function getReversedFibo(arr) {
  const reversedArr = arr.reverse();
  const newArr = [];
  reversedArr.forEach(element => {
    const additionalValue = newArr[newArr.length - 1] || 0
    const newValue = element + additionalValue;
    newArr.push(newValue);
  });
  return newArr;
}
