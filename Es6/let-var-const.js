// ! In ES5, when you declare a variable using the var keyword, the scope of the variable is either global or local. If you declare a variable outside of a function, the scope of the variable is global. When you declare a variable inside a function, the scope of the variable is local.

// ** ES6 provides a new way of declaring a variable by using the let keyword. The let keyword is similar to the var keyword, except that these variables are blocked-scope.

// ** In JavaScript, blocks are denoted by curly braces {} , for example, the if else, for, do while, while, try catch and so on:

let age = 22;

if (age >= 22) {
  let nameM = "Mubarak";
  console.log(nameM);
}

//returns a reference error

//  !! JavaScript let and global object

// ** When you declare a global variable using the var keyword, you add that variable to the property list of the global object.
var a = 9;
console.log(window.a, "Helllllllllllloooooooooooo");

// ** However, when you use the let keyword to declare a variable, that variable is not attached to the global object as a property.
let b = 20;
console.log(window.b); // undefined
console.log("Hello");

//! Redeclaration

// ** The var keyword allows you to redeclare a variable without any issue:

var counter = 0;
var counter;

console.log(counter, "Counter");

// **  However, redeclaring a variable using the let keyword will result in an error:
// let counter = 0;
// let counter;
// console.log(counter); returns identifier counter has already been declared

// !! JavaScript let variables and hoisting
{
  console.log(counter); //
  let counter = 10;
}

// This code returns : Uncaught ReferenceError: Cannot access 'counter' before initialization

// ** JavaScript engine will hoist a variable declared by the let keyword to the top of the block. However, the JavaScript engine does not initialize the variable. Therefore, when you reference an uninitialized variable, you’ll get a ReferenceError.

// !! Temporal death zone (TDZ)

//** A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

// ! Initialization occurs when you assign an initial value to a variable.

// * Suppose you attempt to access a variable before its complete initialization. In such a case, JavaScript will throw a ReferenceError. So, to prevent JavaScript from throwing such an error, you’ve got to remember to access your variables from outside the temporal dead zone.

// ** So, to prevent JavaScript from throwing such an error, you’ve got to remember to access your variables from outside the temporal dead zone.

{
  // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
}
