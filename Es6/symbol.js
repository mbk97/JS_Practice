// !! ES6 added Symbol as a new primitive type. Unlike other primitive types such as number, boolean, null, undefined, and string, the symbol type doesn’t have a literal form.

// syntax

const c = Symbol("foo");
console.log(c);

// ** The Symbol() function accepts a description as an optional argument. The description argument will make your symbol more descriptive.

let firstName = Symbol("first name"), // Symbol(first name)
  lastName = Symbol("last name"); // Symbol(last name)

//   ** Since symbols are primitive values, you can use the  typeof operator to check whether a variable is a symbol. ES6 extended  typeof to return the symbol string when you pass in a symbol variable:

console.log(typeof firstName); // symbol

// !! Sharing symbols

// ** ES6 provides you with a global symbol registry that allows you to share symbols globally. If you want to create a symbol that will be shared, you use the Symbol.for() method instead of calling the Symbol() function.

// ** The Symbol.for() method accepts a single parameter that can be used for symbol’s description, as shown in the following example:

let ssn = Symbol.for("ssn");

// ** The Symbol.for() method first searches for the symbol with the  ssn key in the global symbol registry. It returns the existing symbol if there is one. Otherwise, the Symbol.for() method creates a new symbol, registers it to the global symbol registry with the specified key, and returns the symbol. Later, if you call the Symbol.for() method using the same key, the Symbol.for() method will return the existing symbol.

let citizenID = Symbol.for("ssn");
console.log(ssn === citizenID); // true

// ! Symbol usages
