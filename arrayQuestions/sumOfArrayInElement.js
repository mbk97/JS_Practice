const arrVals = [20, 10, 39, 20];
const sumOfArrayInElement = (arr) => {
  const val = arr.reduce((a, b) => a + b, 0);
  return val;
};

console.log(sumOfArrayInElement(arrVals));

function sumOfArrayInElementUsingFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfArrayInElementUsingFor(arrVals));
