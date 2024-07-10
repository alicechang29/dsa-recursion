/*



*/

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(
  arr: number[],
  val: number,
  left = 0,
  right = arr.length): number {

  const midpoint = Math.floor(((left + right) / 2));
  const midVal = arr[midpoint];

  if (midVal === val) return midpoint;
  if (left >= right - 1) return -1;

  if (val > midVal) { // Right half search
    return binarySearchIndex(arr, val, midpoint, right);
  }
  else { // Left half search
    return binarySearchIndex(arr, val, left, midpoint);
  }
}

export { binarySearchIndex };