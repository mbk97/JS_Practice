// ! Optional chaining, introduced in ECMAScript 2020, is a feature that simplifies the process of accessing properties and methods of nested objects or arrays when intermediate properties may be null or undefined.

// ** The optional chaining operator (?.) allows you to access properties or methods without the need for explicit null or undefined checks. If any intermediate property in the chain is null or undefined, the expression short-circuits, and the result is set to undefined.

// ** In programming, "short-circuiting" refers to the behavior where the evaluation of an expression stops as soon as a null or undefined value is encountered along the chain of properties or methods being accessed. Instead of continuing to evaluate the expression, the result is immediately set to undefined, and any subsequent property or method access is skipped.

// Examples

const user = {
  name: "John",
  address: {
    city: "New York",
    zipcode: "10001",
  },
};

// ! Traditional approach
let city;
if (user && user.address && user.address.city) {
  city = user.address.city;
} else {
  city = "Unknown";
}

console.log("Traditional Approach:", city); // Output: New York

// ! Optional Chaining Approach

const cityRes = user?.address?.city;
console.log(cityRes, "hello");

//! Dynamic Property Access

// 2. In this example, we have an array of users, where each user may or may not have a profile.

// ! Traditional approach

// **  The traditional way to access the profile name dynamically involves multiple checks for each user object in the array.

const users = [
  { id: 1, profile: { name: "Alice" } },
  { id: 2 },
  { id: 3, profile: { name: "Bob" } },
];

const names = users.map((user) => {
  if (user.profile && user.profile.name) {
    return user.profile;
  } else {
    return { profile: "unKnown" };
  }
});

// console.log(names, "Names");

// ! Optional Chaining Approach
// ** With optional chaining, dynamic property access becomes more straightforward:

const names2 = users.map((user) => user?.profile?.name || "Not found!");
console.log(names2, "Helloooooooooooooooo");
