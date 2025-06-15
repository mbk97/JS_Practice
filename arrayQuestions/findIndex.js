const findArray = [7, 8, 9, 10, 12];

const findIndxOfEl = (arr) => {
  // findIndex taskes a function
  const val = arr.findIndex((num) => {
    return num === 10;
  });
  console.log("hello");
  return val;
};

console.log(findIndxOfEl(findArray));

const secondFindIndex = (arr) => {
  const res = arr.indexOf(12);
  return res;
};

console.log(secondFindIndex(findArray), "Second Find index");
