/* eslint-disable no-undef */

// with bigInt
export function calculateNumsBI(strA, strB) {
  const numA = BigInt(strA);
  const numB = BigInt(strB);
  const result = (numA + numB).toString();
  return result;
}

// without bigInt

function sortArrsByLength(arrA, arrB) {
  let longestArr = [];
  let shortestArr = [];
  if (arrA.length > arrB.length) {
    longestArr = arrA;
    shortestArr = arrB;
  } else {
    longestArr = arrB;
    shortestArr = arrA;
  }
  return {
    longestArr,
    shortestArr,
  };
}

function setArrValues({
  longestArrValue,
  shortestArrValue = 0,
  resultArray,
  index,
}) {
  const calculatedArrValue = +resultArray[index] || 0;
  const sum = +longestArrValue + +shortestArrValue + +calculatedArrValue;
  if(sum < 10) {
    resultArray[index] = sum;
  } else if(sum >= 10) {
    resultArray[index + 1] = 1;
    const currentIndexValue = sum - 10;
    resultArray[index] = currentIndexValue;
  }
}

function calculateNumbers(shortestArr, longestArr) {
  const reversedShortestArr = [...shortestArr].reverse();
  const reversedLongestArr = [...longestArr].reverse();
  const calculatedValues = [];
  reversedLongestArr.forEach((char, index) => {
    setArrValues({
      longestArrValue: char,
      shortestArrValue: reversedShortestArr[index],
      resultArray: calculatedValues,
      index,
    });
  });
  return calculatedValues.reverse();
}

export function calculateNumsNonBI(strA, strB) {
  const arrA = strA.split("");
  const arrB = strB.split("");
  const { shortestArr, longestArr } = sortArrsByLength(arrA, arrB);
  const result = calculateNumbers(shortestArr, longestArr);
  return result.join('');
}
