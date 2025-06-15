function getScores() {
  return [29, 23, 5, 10, 11, 23];
}

const [x, y, z] = getScores();

console.log(x, y, z);

// ! If the getScores() function returns an array of two elements, the third variable will be undefined

// ! In case the getScores() function returns an array that has more than three elements, the remaining elements are discarded

// ** It’s possible to take all remaining elements of an array and put them in a new array by using the rest syntax (...)

const [a, b, c, ...args] = getScores();

console.log(args);

// ! Setting default values

function newArrItems() {
  return [11, 89];
}

const items = newArrItems();
const thirdItem = items[2] !== undefined ? items[2] : 0;
console.log(thirdItem);

// ! Nested array destructuring
function getProfile() {
  return ["John", "Doe", ["Red", "Green", "Blue"]];
}

const [firstName, lastName, [color1, color2, color3]] = getProfile();

console.log(firstName, lastName, color1);

//! Array Destructuring Assignment Applications

// 1. swapping variables

let h = 10,
  j = 20;

[h, j] = [j, h];

console.log(j, h);
