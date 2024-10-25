/*
 * Binary Search
 */
function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  let mid = Math.ceil(start + (end - start) / 2);

  while (start <= end) {
    if (arr[mid] == key) {
      return mid;
    }

    if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.ceil(start + (end - start) / 2);
  }

  return -1;
}

const arr = [2, 4, 6, 8, 10, 12];
const key = 10;
console.log(binarySearch(arr, key));
