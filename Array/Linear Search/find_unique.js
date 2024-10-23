/*
 * Find unique element
 * a ^ a = 0  --> XOR
 */

function findUniqueElement(arr) {
  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }

  return ans;
}

const arr = [2, 3, 1, 6, 3, 6, 2];
console.log(findUniqueElement(arr)); // 1
