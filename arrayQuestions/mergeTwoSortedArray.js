const arrOne = [3, 47, 22, 10, 11];
const arrTwo = [31, 17, 2, 7, 10];

const mergeSortedArr = (arrOne, arrTwo) => {
  let mergeRes = [];
  let sorted;
  mergeRes = arrOne.concat(arrTwo);
  console.log(mergeRes);
  // sort in ascending order
  sorted = mergeRes.sort((a, b) => a - b);

  // sort in descending order
  // sorted = mergeRes.sort((a, b) => b - a);

  return sorted;
};

console.log(mergeSortedArr(arrOne, arrTwo));
