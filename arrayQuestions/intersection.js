// *  When working with arrays, it’s often useful to find the common elements shared by two different arrays. The process of finding the intersection of arrays allows us to identify the elements that exist in both arrays.

// * Using in built function

const findInterscetionOne = (arr1, arr2) => {
  return arr1.filter((el) => arr2.includes(el));
};

const firstArr = [2, 8, 9, 73, 10];
const SecondArr = [2, 18, 19, 173, 10];

console.log(findInterscetionOne(firstArr, SecondArr));

const findInterscetionTwo = (arr1, arr2) => {
  let intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (arr2.indexOf(element) !== -1 && intersection.indexOf(element) === -1) {
      intersection.push(element);
    }
  }
  return intersection;
};

console.log(findInterscetionTwo(firstArr, SecondArr));
