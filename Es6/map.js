//!! Maps

//** By definition, a Map object holds key-value pairs. Keys are unique in a Map’s collection. In other words, a key in a Map object only appears once.

// To create a new Map, you use the following syntax:

// !! let map = new Map([iterable]);

//  The Map() accepts an optional iterable object whose elements are key-value pairs.

// ** useful JS methods

// ! Clear: removes all elements from an object == clear()

// ! delete(key): removes an element specified by the key. It returns true if the element is in the map, or false if it does not.

// ! entries() – returns a new Iterator object that contains an array of [key, value] for each element in the map object. The order of objects in the map is the same as the insertion order.

// ! forEach(callback[, thisArg]) – invokes a callback for each key-value pair in the map in the insertion order. The optional thisArg parameter sets the this value for each callback.

// ! get(key) – returns the value associated with the key. If the key does not exist, it returns undefined.

// ! has(key) – returns true if a value associated with the key exists or false otherwise.

//! set(key, value) – sets the value for the key in the map object. It returns the map object itself therefore you can chain this method with other methods.

//!  values()- returns a new iterator object that contains values for each element in insertion order.

// !** Examples

let john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" };

//** Suppose you have a list of user objects,and  you have to create a map of users and roles. In this case, you use the following code

let userRoles = new Map();

// The userRoles is an instance of the Map object and its type is an object as illustrated in the following example:

// console.log(typeof userRoles); // object
// console.log(userRoles instanceof Map);

// ** To assign a role to a user, you use the set() method:

// userRoles.set("John", "Admin");

// ** The set() method maps user john with the admin role. Since the set() method is chainable, you can save some typing as shown in this example:

userRoles.set(john, "Admin").set(lily, "editor").set(peter, "subscriber");

console.log(userRoles.get("John"));

//** To check if a key exists in the map, you use the has() method.
console.log(userRoles.has("developer"));

// ** The size property returns the number of entries of the Map object.
console.log(userRoles.size);

// ** Iterate over map keys

// To get the keys of a Map object, you use the keys() method. The keys() returns a new iterator object that contains the keys of elements in the map.

for (const user of userRoles.keys()) {
  console.log(user, "User here");
}

// Similarly, you can use the values() method to get an iterator object that contains values for all the elements in the map:

for (const user of userRoles.values()) {
  console.log(user, "User here");
}

// Also, the entries() method returns an iterator object that contains an array of [key,value] of each element in the Map object:

for (const role of userRoles.entries()) {
  console.log(role, "Roles");
}

// To make the iteration more natural, you can use destructuring as follows:
for (let [user, role] of userRoles.entries()) {
  console.log(`${user.name}: ${role}`);
}

// ! Convert map keys or values to an array Sometimes, you want to work with an array instead of an iterable object, in this case, you can use the spread operator.

// For Keys
var keys = [...userRoles.keys()];
console.log(keys, "Keys here");

// For Values
var keys = [...userRoles.values()];

// To delete an entry in the map, you use the delete() method.
console.log(userRoles.delete(john), "King");

// To delete all entries in the Map object, you use the clear() method:
userRoles.clear();
