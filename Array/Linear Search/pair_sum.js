/*
 * Pair Sum
 *
 */

function findPairSum(arr, num) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        let pair = [];
        pair.push(Math.min(arr[i], arr[j]));
        pair.push(Math.max(arr[i], arr[j]));
        ans.push(pair);
      }
    }
  }

  ans.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  return ans;
}

const arr = [2, -3, 3, 3, -2];
const num = 0;
console.log(findPairSum(arr, num)); // [ [ -3, 3 ], [ -3, 3 ], [ -2, 2 ] ]
