/*
 * Reverse Array
 */

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

const arr = [1, 4, 0, 5, -2, 15];
console.log(reverseArray(arr)); // [ 15, -2, 5, 0, 4, 1 ]
