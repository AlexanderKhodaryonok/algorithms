const digits = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function getArabDigits(roman) {
  const arabArray = [];
  for (let digit of roman) {
    arabArray.push(digits[digit]);
  }
  return arabArray;
}

function formatDigits(arabDigits) {
  let isSkip = false;
  const formattedNumbers = [];
  arabDigits.forEach((digit, index, arr) => {
    const nextDigit = arr[index + 1] || 0;
    if (digit >= nextDigit && !isSkip) {
      formattedNumbers.push(digit);
      isSkip = false;
      return 
    }
    if (digit < nextDigit && !isSkip) {
      const balancer = digit === 1 ? 1 : digit * 2;
      const formattedDigit = arr[index + 1] - balancer;
      formattedNumbers.push(formattedDigit);
      isSkip = true;
      return 
    }
    isSkip = false;
  });
  return formattedNumbers;
}

export function getArabDigit(roman) {
  const arabDigits = getArabDigits(roman);
  const formattedDigits = formatDigits(arabDigits);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const number = formattedDigits.reduce(reducer);
  return number;
}
