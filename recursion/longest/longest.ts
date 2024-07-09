import { LLNodeStr } from "../common/ll";

/*
empty list

non empty
- go through each item
- for each item, check the length
- keep track of the max length

Return the larger number between 2 comparisons

*/


/** longest: return length of longest word in a linked list of words. */

function longest(words: LLNodeStr | null): number {
  //base case
  if (words === null) {
    return 0;
  }

  const currWordLength = words.val.length;
  const nextNode = words.next;
  const nextWordLength = longest(nextNode);

  return currWordLength > nextWordLength ? currWordLength : nextWordLength;

}

export { longest };
