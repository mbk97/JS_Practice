const arrTest = [1, 2, 4, 0, 6, 0, 7, 0];

const functionToMoveZeros = (arr) => {
  let nonZeroElements = [];
  let zeroElements = [];
  let sum;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      nonZeroElements.push(arr[i]);
    } else {
      zeroElements.push(arr[i]);
    }
  }

  sum = nonZeroElements.concat(zeroElements);
  return sum;
};

console.log(functionToMoveZeros(arrTest));
