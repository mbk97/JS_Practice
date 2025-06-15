// ! LINEAR SEARCH

// ! This is a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.

// ** Given an array of 'n' elements and a target element 't', find the index of t in the array and return -1 if the target element is not found.

// Example 1 [8,9,10,22,46] t-10 =2, because the value is the result of the second index in the array

// ! start at the first element in the array and move towards the last
// ! At each element, check if the element is equal to the target element
// ! If the element is found, return the index of the element, if the element is not found, return -1

const findElemet = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return { index: i, value: target };
    }
  }
  return -1;
};

console.log(findElemet([3, 45, 6, 7, 9], 6));

const findNewElement = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return { index: i, value: target };
    }
  }

  return -1;
};

console.log(findNewElement([3, 45, 6, 7, 9], 45));
