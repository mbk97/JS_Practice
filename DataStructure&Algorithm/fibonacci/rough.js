// * Given a number 'n' elements find the first of the fibonacci sequence.

const fib = (n) => {
  if (n <= 0) {
    return;
  }

  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};

// * Time complexity is linear 0(n)

console.log(fib(7)); // [0, 1, 1, 2, 3, 5, 8]

// * Fibonacci Number
const fibNum = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let fibArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  //* The function returns the Fibonacci number at position n.s
  console.log(fibArray[n]); //returns 55
};

fibNum(10);

// * Recursive

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

console.log(printFibo(5), "Hello");
