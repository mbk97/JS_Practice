// !! The spread operator allows you to spread out elements of an iterable object such as an array, map, or set.

// ** The spread operator allows you to unpack the elements of an array or objects
// ** The Rest operator allows you to pack the elements into an array or objects

const odd = [3, 5, 7];
const even = [2, 4, 6];

const combined = [odd, ...even];

console.log(combined, "Hello");

const obj1 = {
  name: "Mubarak",
  age: 56,
};

const obj2 = {
  club: "Chelsea",
  city: "London",
};

const combinedObj = {
  ...obj1,
  ...obj2,
};

console.log(combinedObj);

// !! The spread operator is used to concatenate an array or objects
// !! The spread operator is also used to  copy an array or objects
