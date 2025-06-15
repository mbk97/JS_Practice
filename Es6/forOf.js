// ! They are used to iterate over objects that are iterable such as arrays, strings, map and sets

// syntax

// for(variable of variables){console.log(variable)}

// ** In each iteration, a property of the iterable object is assigned to the variable. You can use var, let, or const to declare the variable.

// ! Examples

// * 1. Iterating over arrays

const scores = [10, 20, 30];
let result = [];
for (let score of scores) {
  result.push(score * 3);
}

console.log(result);
