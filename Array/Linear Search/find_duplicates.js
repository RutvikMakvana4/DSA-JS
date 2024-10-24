/*
 * Find One Duplicate
 */

function findDuplicate(arr) {
  let ans = 0;

  // XOR all array elements
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }

  // XOR [1, n-1]
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ i;
  }

  return ans;
}

const arr = [5, 1, 2, 3, 4, 2];
console.log(findDuplicate(arr)); // 2
