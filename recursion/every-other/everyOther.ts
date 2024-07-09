
/** Pseudo-Code
 * get the first char
 * recursively call with the string - 2
 *
 * "hello"
 * 1(hello) h + 2()
 *    2(llo) l + 3()
 *      3(o) o + 4()
 *          4("") (base case, string.length === 0) -> ""
 */

/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {
  if(str.length === 0) return ""; // Base case

  return str[0] + everyOther(str.slice(2));
}

export { everyOther };