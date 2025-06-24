// ! Write a function named sum that gets a number n and returns the sum of the numbers from 1 to n.

function summationOfNumbers(n) {
  if (n <= 1) return;

  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(summationOfNumbers(3));

// ** Recursive function
function summationOfNumbersRecursive(n) {
  if (n <= 1) return n;
  return n + summationOfNumbersRecursive(n - 1);
}
console.log(summationOfNumbersRecursive(6));

// ! Write a function named reverse that gets a string as input and returns the string reversed.
function reverseStringFunc(val) {
  const data = val.split("");
  const reversedStr = data.reverse();
  const finalValue = reversedStr.join("");
  return finalValue;
}

console.log(reverseStringFunc("Mubarak"));

// ! Write a function named capitalize that gets a string (only lower case) and capitalizes it.

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 0) return word; // Handle empty words
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
console.log(capitalizeWords("this is an example"));

// ! Write a function named remove that gets a string and an integer and returns the string without a letter in the index corresponding to the integer.

const removeIndexFromStr = (title, index) => {
  const str = title.split("");
  str.splice(index, 1);
  const newStr = str.join("");
  return newStr;
};

console.log(removeIndexFromStr("Mubarak", 4));

// ! Write a function named mulWord that gets a string s and an integer n and returns the string n times with space between each.
function mulWord(s, n) {
  result = "";
  for (let i = 0; i < n; i++) {
    result += s + " ";
  }
  return result;
}

console.log(mulWord("Cow", 3));

//! Write a function named isPrime that gets an integer num and returns true if num is a prime number otherwise false.

// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {
  // looping through 2 to number-1
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}

// check if number is less than 1
else {
  console.log("The number is not a prime number.");
}

const convertStringToArray = (val) => {
  const result = val.split("");
  return result;
};

// console.log(convertStringToArray("hello"));

// ! convertAnArrayToString
const convertAnArrayToString = (arr) => {
  const result = arr.join("");
  return result;
};
console.log(convertAnArrayToString(["hi", "hello"]));

//! convertArrayToString
const convertArrayToString = (arr) => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]; // concatenate each element
  }
  return result;
};

console.log(convertArrayToString(["h", "e", "l", "l", "o"])); // Output: "hello"

const arr1 = [1, 2, 3, 4, 5];

arr1[1] = 7;
console.log(arr1);
