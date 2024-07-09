/*

1([9], 9) - return true

1([9], 8) - return false

1([9,8,7], 7)
  2([8,7], 7)
    3([7], 7) - return true


1([9,8,7], 5)
  2([8,7], 5)
    3([7], 5) - return false
*/

/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {
  if(arr.length === 0) return false
  const [firstNum, ...rest] = arr;

  if(firstNum === val) return true;

  return find(rest, val);
}

export { find };