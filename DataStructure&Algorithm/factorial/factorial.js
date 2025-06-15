// !! FACTORIAL

// ** In mathematics, the factorial of a non-negative integer 'n' denoted as n!, is the product of all positive integers less than or equal to 'n'.

// ! Factorial of Zero is == 1

// ! Examples
// ** factorial(4) = 4*3*2*1 = 24;
// ** factorial(5) = 5*4*3*2*1 = 120;

// ! Practice

// ** 1. Using for loop
const factorial = (n) => {
  //! We are setting the answer variable to 1 because the factorial of both 0 and 1 == 1;
  //! Check if the number passed to the factorial function is equal to 0 or 1
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  } else if (n > 1) {
    //! If the number passed is greater than 1, then find the factorial.
    for (let i = 2; i <= n; i++) {
      answer = answer * i;
    }
    return answer;
  } else {
    //! check if the number passed is not a negative number
    return "Number must be positive";
  }
};

// ** The time complexity for this is linear

// console.log(factorial(50));

// ** 2. Using recursion.
const factorialRecursion = (n) => {
  //! If the number is less than 0, reject it.
  if (n < 0) {
    return "Number must be a positive integer";
  } else if (n == 0) {
    return 1;
    // ! We returned 1 because the factorial of 0 is 1
  } else {
    return n * factorialRecursion(n - 1);
  }
};
function factorialRecursionTwo(n) {
  let answer = 1;
  if (n === 0 || n === 1) {
    return answer;
  } else if (n > 1) {
    answer = n * factorialRecursion(n - 1);
    return answer;
  } else {
    return "Number must be a positive integer";
  }
}

console.log(factorialRecursion(5));

// ** 3. Using while loop.
const factorializeWhile = (n) => {
  let result = n;

  if (n == 0 || n == 1) return 1;
  while (n > 1) {
    n--;
    result *= n;
  }
  return result;
};

function factorializeWhileTwo(n) {
  let answer = n;
  if (n === 0 || n === 1) return answer;
  while (n > 1) {
    n--;
    answer *= n;
  }
  return answer;
}

console.log(factorializeWhileTwo(10));
console.log(factorializeWhile(5));

// ! BIG-0 guide
// ** Calculation not dependent on input size - 0(1)

// * loop - 0(n) = linear
// * nested loop - 0(n2)
// * loop - 0(n) = linear

const findFactorial = (n) => {
  if (n < 0) {
    return false;
  } else if (n == 0) {
    return 1;
  } else {
    return n * findFactorial(n - 1);
  }
};

console.log(findFactorial(10));
