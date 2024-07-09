import { LLNodeNum } from "../common/ll";

/*
empty list

non empty list
- to start: get val of head
- set curr node to the head.next
- get the val of curr node.val
- set curr node to curr node.next
- do this until we hit length of 0


[2,3,4]
2
3
4
0
*/

/** product: calculate the product of a linked list of numbers. */

function product(nums: LLNodeNum | null): number {
  //base case
  if (nums === null) {
    return 1;
  }
  // go until we get null
  let currNodeVal = nums.val;
  let nextNode = nums.next;
  return currNodeVal * product(nextNode);
}

export { product };