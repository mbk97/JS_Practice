// !! Rest parameter is used to gather parameters and put them in an array

// ** It allows you to represent an indefinite number of arguments in an array
// it is denoted by three dots (...)

// Example

function sum(a, b, ...args) {
  const argsSum = args.reduce((prev, curr) => prev + curr); //returns 108
  return a + b + argsSum; // returns 111
}

console.log(sum(1, 2, 3, 7, 98));

// !! If you pass only the first two parameters, the rest parameter will be an empty array

// !! The rest parameters must appear at the end of the argument list
// function fn(a,...rest, b) {
//  // error
// }

//Example 2
function addAllArgs(...args) {
  let total = 0;
  //A for of loop is used to iterate over the element of the args and added to the total
  for (const x of args) {
    total += x;
  }
  return total;
}

console.log(addAllArgs(3, 8, 10));

// ! In a scenario where a function passes arguments with different types of data e.g string, number, boolean and you want to calculate the total numbers only

function filterArgs(...args) {
  return args
    .filter((e) => {
      return typeof e == "number";
    })
    .reduce((prev, curr) => {
      return prev + curr;
    });
}

console.log(filterArgs(9, "hello", false, 60), "Res here");
