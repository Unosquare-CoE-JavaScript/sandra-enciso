/* From https://www.codewars.com/kata/52774a314c2333f0a7000688 */
/**
 * Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
 * The function should return true if the string is valid, and false if it's invalid.
 *
 * EXAMPLES
 * "()"              =>  true
 * ")(()))"          =>  false
 * "("               =>  false
 * "(())((()())())"  =>  true
 */

function validParentheses(parens) {
  if (!parens) {
    return true;
  }

  let parentheses = [];

  for (let i = 0; i < parens.length; i++) {
    let char = parens.charAt(i);
    if (char == "(") {
      parentheses.push("(");
    } else if (parentheses[parentheses.length - 1] === "(") {
      parentheses.pop();
    } else {
      return false;
    }
  }

  return !parentheses.length;
}
