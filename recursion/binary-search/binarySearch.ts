
/*

*favorite num = 1*

Is your favorite num 5(midpoint)? no
Is your favorite num greater than 5? no
1,2,3,4,5,6,7,8,9,10

Is your favorite num 3(midpoint)? no
Is your favorite num greater than 3? no
1,2,3,4,5,

Is your favorite num 1(midpoint)? YES
1,2


1([1,2,3,4], 2)
  2L([1,2], 2)
    3([1,2], 2) -> true

1([1,2,3,4], 4)
  2R([3,4], 4) -> true

1([1,2,3,4], 6) L = 0, R = 4
  2R([3,4], 6)  L = 2, R = 4
    2R([4], 6)  L = 3, R = 4

Sliding window technique!
Use left and right to determine where you are looking in the array.
*/

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {
  const midpoint = Math.floor(((left + right) / 2));
  const midVal = arr[midpoint];

  if (midVal === val) return true;
  if (left >= right - 1) return false;

  if (val > midVal) { // Right half search
    return binarySearch(arr, val, midpoint, right);
  }
  else { // Left half search
    return binarySearch(arr, val, left, midpoint);
  }
}

export { binarySearch };