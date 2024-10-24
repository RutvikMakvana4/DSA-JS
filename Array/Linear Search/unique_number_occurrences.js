/*
 * Leetcode 1207 :- Unique Number of Occurrences
 */

function uniqueNumber(arr) {
  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }

  return ans;
}

const arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueNumber(arr)); // true
