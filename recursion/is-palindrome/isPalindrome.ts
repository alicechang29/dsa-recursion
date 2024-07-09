/*

if ends are the same, continue

*/

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  //base case - midpoint
  console.log(str);
  if (str.length < 2) return true;

  const firstLetter = str[0];
  const lastLetter = str[str.length - 1];

  if (firstLetter === lastLetter) {
    return isPalindrome(str.slice(1, str.length - 1));
  }

  return false;
}

export { isPalindrome };