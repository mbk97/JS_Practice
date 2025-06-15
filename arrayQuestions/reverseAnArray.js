const arrRes = ["Mubarak", "Muhammed", "Olalekan", "Oyindamola"];

const reverseFunction = (arr) => {
  const res = arr.reverse();
  return res;
};

// console.log(reverseFunction(arrRes));

// ** Using a for loop (or any other type of loop), we can loop through an array from the last time to the first item, and push those values to a new array which becomes the reversed version

const secondReverseFunction = (arr) => {
  let newReversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newReversedArr.push(arr[i]);
  }
  return newReversedArr;
};

console.log(secondReverseFunction(arrRes));
