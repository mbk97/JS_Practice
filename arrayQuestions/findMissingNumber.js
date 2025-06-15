const arrTest = [1, 2, 3, 4, 6]; // Example array with one missing number (5 in this case)

const findMissingNumber = (arr) => {
  const n = arr.length + 1; // Since we're missing one number, n is the length of the array plus one

  let xorAll = 0;
  let xorArray = 0;

  // XOR all indices from 0 to n
  for (let i = 0; i < n; i++) {
    xorAll ^= i;
  }

  // XOR all elements in the array
  for (let num of arr) {
    xorArray ^= num;
  }

  // XOR the two results to get the missing number
  return xorAll ^ xorArray;
};

console.log(findMissingNumber(arrTest)); // Output will be the missing number (5)
