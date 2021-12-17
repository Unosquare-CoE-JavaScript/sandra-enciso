/* From https://www.codewars.com/kata/59293c2cfafd38975600002d */
/**
 * String.prototype.findParenMatch = function(pos) an index Int pos.
 * Based on the given index, return the matching parenthesis in the given string.
 *
 * EXAMPLE
 * str = "(something)"
 * str.findParenMatch(0) // returns 10 because the parenthesis that matches the one on index 0 is at index 10.
 */

String.prototype.findParenMatch = function (pos) {
  let par = this.charAt(pos),
    openParentheses = 0;

  switch (par) {
    case "(":
      for (let i = pos + 1; i < this.length; i++) {
        let char = this.charAt(i);
        if (char === "(") {
          ++openParentheses;
        }
        if (char === ")" && openParentheses === 0) {
          return i;
        }
        if (char === ")" && openParentheses > 0) {
          --openParentheses;
        }
      }
      break;
    case ")":
      for (let i = pos - 1; i >= 0; i--) {
        let char = this.charAt(i);
        if (char === ")") {
          ++openParentheses;
        }
        if (char === "(" && openParentheses === 0) {
          return i;
        }
        if (char === "(" && openParentheses > 0) {
          --openParentheses;
        }
      }
      break;
  }

  return -1;
};
