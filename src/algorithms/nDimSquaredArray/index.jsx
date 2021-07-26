export function createSquaredNArray(size) {
  const squaredNArray = [];
  for (let i = 0; i <= size - 1; i++) {
    squaredNArray.push(new Array(size));
  }
  return squaredNArray;
}

export function fillSquaredNArray(squaredArray) {
  const size = squaredArray.length;
  for (let i = 0; i <= size - 1; i++) {
    for (let j = 0; j <= size - 1; j++) {
      squaredArray[i][j] = i.toString() + j.toString();
    }
  }
  return squaredArray;
}

export function replaceDiagonals(squaredArray) {
  const lastIndex = squaredArray.length - 1;
  let firstMainIndex = 0;
  let secondMainIndex = 0;
  let firstMinorIndex = 0;
  let secondMinorIndex = lastIndex;
  let i = 0;
  do {
    let replacer = squaredArray[firstMainIndex][secondMainIndex];
    squaredArray[firstMainIndex][secondMainIndex] =
      squaredArray[firstMinorIndex][secondMinorIndex];
    squaredArray[firstMinorIndex][secondMinorIndex] = replacer;
    firstMainIndex++;
    secondMainIndex++;
    firstMinorIndex++;
    secondMinorIndex--;
    i++;
  } while (i <= lastIndex);
  return squaredArray;
}

export function replaceRows(squaredArray, firstRowIndex, secondRowIndex) {
  const lastIndex = squaredArray.length - 1;
  let replacer = "";
  for (let i = 0; i <= lastIndex; i++) {
    replacer = squaredArray[firstRowIndex][i];
    squaredArray[firstRowIndex][i] = squaredArray[secondRowIndex][i];
    squaredArray[secondRowIndex][i] = replacer;
  }
  return squaredArray;
}

export function replaceColumns(
  squaredArray,
  firstColumnIndex,
  secondColumnIndex
) {
  const lastIndex = squaredArray.length - 1;
  let replacer = "";
  for (let i = 0; i <= lastIndex; i++) {
    replacer = squaredArray[i][firstColumnIndex];
    squaredArray[i][firstColumnIndex] = squaredArray[i][secondColumnIndex];
    squaredArray[i][secondColumnIndex] = replacer;
  }
  return squaredArray;
}

export function findMaxRowValue(squaredArray, rowIndex) {
  const lastIndex = squaredArray.length - 1;
  let maxValue = squaredArray[rowIndex][0];
  for (let i = 1; i <= lastIndex; i++) {
    const currentValue = squaredArray[rowIndex][i];
    if (maxValue < currentValue) {
      maxValue = currentValue;
    }
  }
  return maxValue;
}

export function findMaxColumnValue(squaredArray, columnIndex) {
  const lastIndex = squaredArray.length - 1;
  let maxValue = squaredArray[0][columnIndex];
  for (let i = 1; i <= lastIndex; i++) {
    const currentValue = squaredArray[i][columnIndex];
    if (maxValue < currentValue) {
      maxValue = currentValue;
    }
  }
  return maxValue;
}

export function findMaxValue(squaredArray) {
  const lastIndex = squaredArray.length - 1;
  let maxValue = squaredArray[0][0];
  for (let i = 1; i <= lastIndex; i++) {
    for (let j = 1; j <= lastIndex; j++) {
      const currentValue = squaredArray[i][j];
      if (maxValue < currentValue) {
        maxValue = currentValue;
      }
    }
  }
  return maxValue;
}
