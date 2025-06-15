function getUnion(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const union = getUnion(array1, array2); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(union);
