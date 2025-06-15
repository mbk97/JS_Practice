// ! FIBONACCI SEQUENCE

// ** Given a number 'n' elements find the first of the fibonacci sequence.

// ! In Mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two previous ones.

// ! it is represented by Fn = (Fn - 1) + (Fn - 2)

// * Example

// ** 1. The first two numbers in the sequence are 0 and 1.

const fibonacciTwo = (n) => {
  //* The importance of initializing the first array with [0, 1] in your fibonacciTwo function lies in the fact that these are the base cases for the Fibonacci sequence
  let fib = [0, 1];

  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib; //returns the sum of the array
};

const fibonacci = (n) => {
  // !from the result given below, you should know that in a case like this, the first two numbers will be 0 and 1
  const fib = [0, 1];

  // ! Next,populate the remaining element from the third element till n while satifying the condition that every number is the sum of the previous two numbers. To do this you can utilize a for loop by starting your index from 2, since you already have element from index = 0 and index = 1. Iterate till you have n elements in the array

  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(5));

// ! fibonacci(2) = [0,1]
// ! fibonacci(3) = [0,1,1]
// ! fibonacci(7) = [0,1,1,2,3,5,8]

const printFib = (n) => {
  let first = 0,
    second = 1,
    sum;

  for (i = 2; i < n; i++) {
    sum = first + second;
    console.log(sum);
    first = second;
    second = sum;
  }
};

printFib(10);

// !Printing fibonacci series using recursion

const printFibo = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let fib = printFibo(n - 1) + printFibo(n - 2);
    console.log(fib);
    return fib;
  }
};

// console.log(printFibo(5));
const newFib = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let fib = newFib(n - 1) + newFib(n - 2);
    console.log(fib, "Hello");
    return fib;
  }
};

newFib(5);
