// const ascendingArray = [2, 3, 4, 5, 49, 10];
const ascendingArray = [2, 3, 4, 5, 10, 11];

// console.log(ascendingArray[ascendingArray.length - 1]); // 10;
// ** Purpose of i < arr.length - 1
// It ensures that the loop does not go beyond the second-to-last element

const checkAscendingArray = (arr) => {
  let isSorted = true; // Assume the array is sorted unless we find otherwise

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false; // Array is not sorted
      break; // Exit the loop early since we found the array is not sorted
    }
  }
  if (isSorted) {
    console.log("Array is sorted in ascending order");
  } else {
    console.log("Array is not sorted in ascending order");
  }
};

// Example array
// const ascendingArray = [2, 3, 4, 5, 49, 10];
checkAscendingArray(ascendingArray); // Output: Array is not sorted in ascending order

// !Remove duplicates from an array
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);

//! . Find the Frequency of Elements in an Array
function findFrequency(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

const arrayh = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frequency = findFrequency(arrayh);
console.log(frequency);

// ! Rotate an Array by K Positions
function rotateArray(arr, k) {
  const len = arr.length;
  // Handle cases where K is larger than the array length
  k = k % len;

  // Handle negative K for left rotation
  if (k < 0) {
    k = len + k;
  }

  // Rotate the array
  return [...arr.slice(-k), ...arr.slice(0, len - k)];
}

const arrayj = [1, 2, 3, 4, 5, 6, 7];
const k = 3; // Rotate by 3 positions
const rotatedArray = rotateArray(arrayj, k);
console.log(rotatedArray);
