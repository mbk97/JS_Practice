// ! Array.of() Method

// In ES5 when you pass a number to the array constructor, javascript creates an array whose length is equal to the number

// ** Example

const arr = new Array(5);

// console.log(arr) == 5

// However, when you pass to the Array constructor a value that is not a number, JavaScript creates an array that contains one element with that value. For example:

// let numbers = new Array("2");
// console.log(numbers.length); // 1
// console.log(numbers[0]); // "2"

// This behavior is sometimes confusing and error-prone because you may not know the type of data that you pass to the Array constructor

// ! The Array.of() method is similar to the Array constructor except the Array.of() method does not treat a single numeric value special.

// !! **** This method always creates an array that contains the values that you pass to it regardless of the types or the number of arguments.

const newNum = Array.of(1, 2, 3, 4);
console.log(newNum.length, "New Num here");

// !! Array.from() method

// ** This method that creates a new array from an array-like or iterable object.

const newArrFrm = Array.from("Hello");

// console.log(newArrFrm, "Hello");

//  To create an array from an array-like object in ES5, you iterate over all array elements and add each of them to an intermediate array like this:
function arrayFromArgs() {
  let results = [];
  for (let i = 0; i < arguments.length; i++) {
    results.push(arguments[i]);
  }
  return results;
}

const answer = arrayFromArgs("Apple", "Banana", "Orange");
console.log(answer, "Answer here");

// ! ES6 introduces the Array.from() method that creates a new instance of the Array from an array-like or iterable object.

//  this is the way the syntax works

//**   Array.from(target [, mapFn[, thisArg]])

// ** target is an array-like or iterable object to convert to an array.
// ** mapFn is the map function to call on every element of the array
// ** thisArg is the this value when executing the mapFn function.

function newArrFnc(arguments) {
  return Array.from(arguments);
}

// console.log(
//   newArrFnc({
//     name: "Mubarak",
//     lastName: "Muhammed",
//     age: 45,
//   }),
// );

// !! Array.find() method

// ** This used to search for the first element in the array which satisfies a test.

// In ES5, to find an element in an array, you use the indexOf() or lastIndexOf() methods. However, these methods are quite limited because they return the index of the first matching element only.

// ! Example

let numbers = [1, 2, 3, 4, 5, 6, 14];

console.log(
  numbers.find((e) => e % 7 === 0),
  "HHHHHHHHHHHH"
);

let customers = [
  {
    id: 1,
    customerName: "ABC 1",
    credit: 100,
  },
  {
    id: 2,
    customerName: "ABC 2",
    credit: 200,
  },
  {
    id: 3,
    customerName: "ABC 3",
    credit: 400,
  },
];

console.log(customers.find((f) => f.credit > 100));
// returns  ={
//     id: 2,
//     customerName: "ABC 2",
//     credit: 200,
//   },

// ! Array.findIndex() Method
// ** This is used to get the index of the first element that satisfies a given test.

// example

let anotherSet = [3, 4, 6, 8, 9];

console.log(anotherSet.findIndex((e) => e === 16));

// The findIndex() method returns the index of the element that satisfies a testing function or -1 if no element passed the test.

// ** This example uses the findIndex() method to get the index of the first occurrence of the number 7 after the index 2 in the ranks array

let ranks = [1, 5, 7, 8, 10, 7];

console.log(
  ranks.findIndex((rank, index) => rank === 7 && index > 2),
  "Solution"
);

// ** The following example uses the Array findIndex() method to find the index of the first product whose price is greater than 1000:

const products = [
  { name: "Phone", price: 999 },
  { name: "Computer", price: 1999 },
  { name: "Tablet", price: 995 },
];

const index = products.findIndex((product) => product.price === 995);
console.log(index, "Index");

console.log(
  Array.from(10).map((arr) => {
    return "hello";
  })
);
