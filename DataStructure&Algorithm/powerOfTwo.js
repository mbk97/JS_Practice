// ! A number is a power of two when you divide the given number by 2 and the remainder is 0

const powerOfTwo = (n) => {
  // ! Check if n is a positive integer
  if (n < 1) {
    return false;
  } else if (n > 1 && n % 2 !== 0) {
    return false;
  } else {
    return true;
  }
};

console.log(powerOfTwo(1));
console.log(powerOfTwo(2));
console.log(powerOfTwo(5));

const newPowerOfTwo = (n) => {
  if (n < 1) return false;

  if (n > 1 && n % 2 !== 0) {
    return "Number is not a power of 2";
  } else {
    return "Number is a power of 2";
  }
};

console.log(newPowerOfTwo(10));
console.log(newPowerOfTwo(5));
console.log(newPowerOfTwo(43));
