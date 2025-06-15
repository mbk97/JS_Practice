// ! Object.assign()

// The Object.assign() copies all enumerable and own properties from the source objects to the target object. It returns the target object.

const widget = {
  color: "red",
};

const clonnedObject = Object.assign({}, widget);
console.log(clonnedObject);

// ** Note that the Object.assign() only carries a shallow clone, not a deep clone.

let box = {
  height: 10,
  width: 20,
};

let style = {
  color: "Red",
  borderStyle: "solid",
};

let styleBox = Object.assign({}, box, style);
console.log(styleBox);

// ! If the source objects have the same property, the property of the later object overwrites the earlier one:

// ########################
// !Object.is()

// ** Object.is() method to check if the two values are the same.
// The Object.is() behaves like === with two major differences. -0 and +0 and NaN

// * Negative Zero

// The === operator treats -0 and +0 are the same value:
let amount = +0,
  volume = -0;

console.log(amount === volume, "First");

// the Object.is() treats +0 and -0 as different values.
console.log(Object.is(amount, volume), "Second");

//! NaN

// The === operator considers NaN and NaN are different values. The NaN is the only number that does not equal itself.

let quantity = NaN;
console.log(quantity === quantity);

// However, Object.is() treats NaN as the same value:
console.log(Object.is(quantity, quantity), "Third");
