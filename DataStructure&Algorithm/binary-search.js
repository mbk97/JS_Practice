//! BINARY SEARCH

//! Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.  This only works on a sorted array

// !! Binary search pseudocode ==(description of the steps to solve an algorithm)

// ** if the array is empty, return -1 as the element cannot be found.

// ** if the array has elements, find the middle element in the array. if the target element is equal to the middle element, return the middle index element.

// ** if the target is less than the middle element, binary search left half of the array.

// ** if the target is greater than middle element, binary search right half of the array.

// !! Note that if there are two items, the target is the middle element e.g === [6,10], the middle element is 6

// !! All you have to do is find the middle element and remove half of the array based on where the target element may be. if the target is less than the middle element, get rid of the first half, if the target is greater than the middle element, get rid of the second half

// ! this example below returns the last index in the array and also returns the value of the last item
const data = [1, 2, 3, 4, 5];
const lastIndex = data.length - 1;
const lastItem = data[lastIndex];
console.log(lastItem);
