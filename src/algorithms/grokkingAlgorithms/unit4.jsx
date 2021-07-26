// 4.1
export const sum = (arr) => {
  const arrCopy = [...arr];
  const firstItem = arrCopy.splice(0, 1);
  if (arrCopy.length === 0) {
    return firstItem;
  } else {
    return +firstItem + +sum(arrCopy);
  }
};
// 4.2
export const getLength = (arr) => {
  const arrCopy = [...arr];
  arrCopy.splice(0, 1);
  if (arrCopy.length === 0) {
    return 1;
  } else {
    return 1 + getLength(arrCopy);
  }
};
// 4.3
// cycle
export const getMaxNumber = (arr) => {
  let maxNumber = arr[0];
  arr.forEach((element) => {
    if (element > maxNumber) maxNumber = element;
  });

  return maxNumber;
};
// recursion
export const getMaxNumberRecursion = (arr) => {
  const arrCopy = [...arr];
  const [firstElement] = arrCopy.splice(0, 1);
  if (arrCopy.length === 1) {
    return firstElement;
  }
  const subMax = getMaxNumberRecursion(arrCopy);
  return subMax > firstElement ? subMax : firstElement;
};
