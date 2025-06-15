// ! An Algorithm is a set of well defined instructions used in solving a problem

// ** Algorithm analysis: we evaluate the perfomance of an algorithm in terms of its input size

// ! Time complexity is the amount of time taken by an algorithm to run as function of its input size.

// ! Space complexity is the amount of memory taken by an algorithm to run as a function of its input size.

// ** How to respresent complexity
// ** we use asymptotic notations which are mathematical tools to represent time and space complexity.

// ! Big-O Notation: This is the worst case complexity (This is mostly asked about during interviews)
// ! Omega Notation : Best case complexity
// ! Theta Notation: Average case scenario

// ! Big-O Notation: It describes the complexity of an algorithm using Algebraic terms. It has 2 input characteristics:
// ** 1. It is expressed in terms of its input size
// ** 2. It focuses on the big picture without getting caught up in the minute details.

// ! Big-o Time complexity: It counts the number of times a statement executes based on the input size

//! 𝑂(n)

//* O(n): Searching through a stack of papers to find a specific one. As the number of papers increases, the time it takes to find the correct paper increases proportionally.

//! 𝑂(1)

//* O(1): Looking up a phone number in your contacts by directly typing the name. You instantly retrieve the number regardless of how many contacts you have.

//nm jkjlkj

// ** Example

const summation = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// ! The time complexity for the example above is 4, because it executes 4 times based on the input size of the function which is 4.

// console.log(summation(4));

// ! Note that for time complexity, as the size of the input increases, the time complexity also increases. The time complexity for the above example is 0(n) - Linear

// ** Example 2

function anotherOne(n) {
  return (n * (n + 1)) / 2;
}

// ! The time complexity for the above exmaple is 0(1)- Constant, because this function only runs once regardless of its input.

// ** if you have 2 nested loops, the time complexity will be quadratic 0(n^2) - Quadratic

// ** if you have 3 nested loops, the time complexity will be cubic 0(n^3) - Cubic
console.log(anotherOne(5));

// ! Space complexity

// ! 0(1)- Constant: If the algorithm does not need extra memory, or the memory needed does not depend on its input size. An example will be sorting alogrithm which sorts within an array without utilizing another aditional array.

// ! 0(n)- Linear: in this scenario, the extra space needed grows as the size increases.

// ! 0(logn)- Logarithmic: in this scenario the extra space needed grows but not at the same rate as the input size.

// ! Objects- Big-O
// ** An object is a collection data using key value pairs

const person = {
  firstName: "Mubarak",
  lastName: "Muhammed",
};

// ! insert - 0(1): The time complexity is CONSTANT, because no matter how many property we have in an object, it takes the same amount of time to insert or remove a property.

// ! Remove- 0(1):The time complexity is CONSTANT.

// ! Access- 0(1): The time complexity is CONSTANT. In the example above accessing the firstName or the lastName does not depend on the other values in the object.

// ! Search - 0(n): The time complexity is LINEAR, because we might have to search through all the items in the object before we get our result.

// ! Object.keys()- 0(n): which returns an array of all the keys in an object

// ! Object.values()- 0(n): which returns an array of all the values in an object

// ! Object.entries()- 0(n): which returns an array of all the keys and values in an object

// ! Array- Big-O
// ** An ordered collection of values.

// * insert/remove at end - 0(1) - constant time complexity
// * insert/remove at beginning - 0(n) - linear time complexity : because the index has to be reset for every remaining element in the array
// * access - 0(1) - Constant time complexity
// * Search - 0(n) - linear:  because, in the worst case, you may need to examine every element of the array to find the target
// * Push/pop - 0(1)
//* shift/unshift/concat/slice/splice - 0(n)
//* forEach/map/filter/reduce - 0(n)
