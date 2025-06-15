// !! PRIME NUMBER

// ** A prime number is a natural number greater than 1, and is divisible only by 1 and the number itself e.g 3,5,7,11

// ** Using for loop

const isPrime = (n) => {
  // ! we know that a prime number is a natural numer greater than 1

  if (n < 2) {
    return false;
  }

  // ! if n is greater than 1, we need to check if it is divisible by any smaller number, for this we use a for loop that starts from 2 since every number is divisible by 1 and starting from 2 avoids unnecessary iterations.

  //   ** the condition is less than and not less than or equal to n since n is always divisible by itself
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  // ! however if the loop has completed and no number could divide n it is prime and we return true
  return true;
};

// console.log(isPrime(10)); // false
// console.log(isPrime(5)); // true
// console.log(isPrime(4)); // false

// ** Using while loop

// const isPrimeWhileLoop = (n) => {
//   let divider = 2;

//   while (n > divider) {
//     if (n % divider === 0) {
//       return false;
//     } else {
//       divider++;
//     }
//     return true;
//   }
// };

// console.log(isPrimeWhileLoop(7));

const checkPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return "Not Prime";
    } else {
      return "Number is a prime number";
    }
  }
};

console.log(checkPrime(5));
console.log(checkPrime(10));
console.log(checkPrime(11));
