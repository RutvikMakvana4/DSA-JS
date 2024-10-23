/*
 * Find maximum number in the array
 */

function findMaxNum(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

const arr = [10, 20, 30, 40, 50];
console.log(findMaxNum(arr)); // 50

/*
 * Find minimum number in the array
 */

function findMinNum(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

console.log(findMinNum(arr)); // 10
