
/*
1("str") 2() + s
    2("tr") 3() + t
      3("r") 4() + r
        4("")
results: "rts"
*/

/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {
  if(str.length === 0) return str
  const firstChar = str[0];
  return revString(str.slice(1)) + firstChar;
}

export { revString };