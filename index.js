// ! What is the difference between `null` and `undefined`?

// ** Null
// ** This is an assignment value. It can be assigned to a variable as a representation of no value

// ** Undefined
// ** But the undefined is a primitive value that represents the absence of a value, or a variable that has not been assigned a value

// ! difference between `==` and `===`

//** The == equality operator converts the operands if they are not of the same type, then applies strict comparison.
// console.log(1 == '1'); // true

//**  The === strict equality operator only considers values equal that have the same type.
// console.log(1 === '1'); // false
// console.log(1 === 1); // true

// ! Scope
// ** A scope is a set of variables, objects, and functions that you have access to. There are three types of scopes in JavaScript. Which are Global Scope, Function Scope (Local Scope), and Block Scope.

// ! Tenary Operator

//** The ternary operator is a conditional operator that takes three operands. It is frequently used as a shortcut for the if statement.

// console.log(condition ? true : false);

// ! Closure
// ** A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.

// function outer() {
//   const name = 'Roadmap';

//   function inner() {
//     console.log(name);
//   }

//   return inner;
// }

// const closure = outer();
// closure();

// ** In the above example, the inner function has access to the name variable of the outer function even after the outer function has returned. Therefore, the inner function forms a closure.
