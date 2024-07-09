/*
empty array

non empty
[1,2,3] - 3

1(f([1,2,3])) - 1
  2([2,3]) -  1
    3f([3]) - 0

*/

/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {
  const currNum = arr[0]; //1
  //base case
  if (currNum === val) return 0; // 0
  if (arr.length === 0) return -1;

  const indexCount = findIndex(arr.slice(1), val); // [2,3], 3

  //going down
  if (indexCount !== -1) {
    return indexCount + 1;
  }

  return -1;
}

export { findIndex };