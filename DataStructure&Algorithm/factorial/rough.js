const factorialTest = (n) => {
  let result = 1;

  if (n == 0 || n == 1) {
    return result;
  } else {
    for (let i = 2; i <= n; i++) {
      result = result * i;
    }
  }
  return result;
};

console.log(factorialTest(5));

const factorialRecur = (n) => {
  if (n <= 0 || n == 1) {
    return 1;
  } else {
    return n * factorialRecur(n - 1);
  }
};

console.log(factorialRecur(5), "RECURSION");
