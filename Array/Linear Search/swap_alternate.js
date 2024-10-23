/*
 * Swap alternate of array values
 */

function swapAlternate(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  return arr;
}

const arr = [5, 2, 9, 4, 7, 6, 1, 0];
console.log(swapAlternate(arr)); // [2, 5, 4, 9,6, 7, 0, 1]
