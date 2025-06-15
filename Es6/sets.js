//!! SETS

//  ** ES6 provides a new type Set that stores a collection of unique values of any type. To create a new empty Set, you use the following syntax:

// let setObject = new Set();

// How to create a set

let chars = new Set(["a", "a", "b", "c", "c"]);

// ** All elements in the set must be unique therefore the  chars only contains 3 distinct elements a, b and c.
// console.log(chars, "Hello"); // retuns a,b,c

// ** When you use the  typeof operator to the chars, it returns object.

// !! Get the size of a Set

let size = chars.size;

console.log(size, "Hello"); //size  is 3 because there are no repeated elements in this set.

// !! Add elements to a Set

// ** To add an element to the set, you use the add() method:

chars.add("d");
console.log(chars); //returns a, b, c, d

// ** Since the add() method is chainable, you can add multiple items to a set using a chain statement:

chars.add("e").add("f");

console.log(chars, "H&&&&&&&&&&&&&&&&&&");

// !! Check if a value is in the Set

// ** To check if a set has a specific element, you use the has() method. The has() method returns true if the set contains the element, otherwise, it returns false.

let exist = chars.has("a");
console.log(exist);

//!! Remove elements from a set

// To delete a specified element from a set, you use the delete() method. The following statement deletes the 'f' value from the  chars set.

chars.delete("f");
console.log(chars, "Removed");

//! To delete all elements of a set, you use the clear() method:

chars.clear();
console.log(chars); // Set{}

// ! Looping the elements of a JavaScript Set

//**  A Set object maintains the insertion order of its elements, therefore, when you iterate over its elements, the order of the elements is the same as the inserted order. Suppose you have a set of user roles as follows.
let roles = new Set();
roles.add("admin").add("editor").add("subscriber");

console.log(roles, "Roles");

for (role of roles) {
  console.log(role);
}
