// !! Arrow functions provides a shorter and neater way to write a function expression

//  syntax
const add = (x, y = 99) => x + y;

console.log(add(8), "HHHHHHHHHH");

// ** If you use the block syntax with an arrow function, you need to use the return statement

//! Block body syntax: If you use a block body (with curly braces), you need to use the return statement to return a value explicitly. This is because the block body allows for more complex logic, including multiple statements.

// const add = (a, b) => {
// const sum = a + b;
// return sum;
// };

const add3 = (r, y) => {
  return r + y;
};

console.log(add3(8, 7));

// Sort an array in descending order using arrow function

let numbers = [3, 4, 6, 7, 8];

const result = numbers.sort((a, b) => {
  return b - a;
});
console.log(result);

// !! If an arrow function takes a single parameter, you use the following syntax:
//  (p1) => { statements } || p1 => {statements}

let names = ["John", "Mac", "Peter"];
// let lengths = names.map((name) => name.length);

// **  Two main differences between an arrow function and a regular function.

// ! An arrow function cannot be used as a function constructor. If you use the new keyword to create a new object from an arrow function, you will get an error.

console.log(
  Array.of(1, 2, 3, 4).map((r) => {
    return "hello";
  })
);

//! The major difference between arrow functions and traditional functions in JavaScript is how they handle the this keyword.

// ✅ Arrow Function:
// Does not have its own this.

// Inherits this from the surrounding (lexical) scope.

const obj = {
  name: "Mubarak",
  greet: () => {
    console.log(this.name); // undefined
  },
};
obj.greet();
// this here refers to the global object, not obj.

// ✅ Traditional Function:
// Has its own this.

// this is determined by how the function is called.

const obj3 = {
  name: "Mubarak",
  greet() {
    console.log(this.name); // "Mubarak"
  },
};
obj.greet();

// this correctly refers to obj.
