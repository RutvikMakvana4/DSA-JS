/*
 * Intersection Of Two Arrays
 * 2 pointer approch
 */

function findArrayIntersection(arr1, arr2) {
  let i = 0;
  let j = 0;
  let ans = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] == arr2[j]) {
      ans.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return ans;
}

const arr1 = [1, 2, 2, 2, 3, 4];
const arr2 = [2, 2, 3, 3];
console.log(findArrayIntersection(arr1, arr2)); // [2, 2, 3]
