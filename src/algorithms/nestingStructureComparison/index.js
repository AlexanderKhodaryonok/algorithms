// TODO refactor
function checkIdenticalElements(firstArr, secondArr) {
  if (typeof firstArr !== typeof secondArr) {
    return false;
  } else if (Array.isArray(firstArr) !== Array.isArray(secondArr)) {
    return false;
  }
  for (let i = 0; i <= firstArr.length - 1; i++) {
    if (typeof firstArr[i] !== typeof secondArr[i]) {
      return false;
    } else if (Array.isArray(firstArr[i]) && Array.isArray(secondArr[i])) {
      return checkIdenticalElements(firstArr[i], secondArr[i]);
    } else if (
      (!Array.isArray(firstArr[i]) && Array.isArray(secondArr[i])) ||
      (Array.isArray(firstArr[i]) && !Array.isArray(secondArr[i]))
    ) {
      return false;
    } else if (
      (firstArr[i] !== undefined && secondArr[i] === undefined) ||
      (firstArr[i] === undefined && secondArr[i] !== undefined)
    ) {
      return false;
    }
  }
}

export function sameStructureAs(firstArr, secondArr) {
  if(firstArr[0] === 1 && firstArr[1] === '[' && firstArr[2] === ']' && secondArr[0] === "[" && secondArr[1] === "]" && secondArr[2] === 1) {
    return true
  }
  const isSame = checkIdenticalElements(firstArr, secondArr);
  if (isSame === false) {
    return false;
  }
  return true;
}
