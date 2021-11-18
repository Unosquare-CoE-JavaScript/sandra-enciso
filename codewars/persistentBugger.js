/* From https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec */
/**
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
 * which is the number of times you must multiply the digits in num until you reach a single digit.
 */
function persistence(num, count = 0) {
  if (num.toString().length === 1) {
    return count;
  }

  let newNum = num
    .toString()
    .split("")
    .reduce((x, y) => x * y);
  return persistence(newNum, ++count);
}
