const arrayExOne = [10, 252, 7, 22, 29];

const findTheSmallestNumber = (arr) => {
  if (arr.length === 0) {
    return;
  }
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
};

console.log(findTheSmallestNumber(arrayExOne));

const findTheLargestSum = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let largest = arr[1];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(findTheLargestSum(arrayExOne));
