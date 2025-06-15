// ! The bubble sort algorithm is not the most efficient sorting algorithm when it comes to time complexity.

// !! Bubble sort is a simple sorting algorithm that repeatedly loops through a list, compares adjacent elements, and swaps them if they are in the wrong order.

// !! it has a worst-case time complexity of O(n^2), which means that it's not a good choice for sorting very large lists.s

// !** Examples

// ! 1. Given an array of integers,sort the array

const arr = [-6, 20, 8, -2, 4];

// ** bubble sorting this array should return [-6, -2, 4, 8, 20]

//!! Guide

//** 1. compare adjacent elements in the array, swap the positions if they are not in the intended order.

// ** 2. Repeat the instruction as you step through each element in the array.

// ** 3. Once you step through the whole array with no swap,the array is sorted.

// [-6, 20, 8, -2, 4] => [-6, 8, 20, -2, 4]  ==== since 20 > 8 Repeat the comparison till all the elements in the array is sorted

function bubbleSort(arr) {
  let swapped;
  //   This allows you check if elements have been swapped, if so repeat the comparison.
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

let sortArr = [-6, 20, 8, -2, 4];
bubbleSort(sortArr);
console.log(sortArr, "hello");

// Example 2

function bubbleSortTwo(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const exampleArray = [5, 9, 7, 3, 1];
bubbleSortTwo(exampleArray);
console.log(exampleArray, "HelloTwo");
