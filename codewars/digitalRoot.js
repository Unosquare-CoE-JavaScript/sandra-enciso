/* From https://www.codewars.com/kata/541c8630095125aba6000c00 */
/**
 * Digital root is the recursive sum of all the digits in a number.
 * Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
 * The input will be a non-negative integer.
 */

function digital_root(n) {
  if (n < 10) {
    return n;
  }
  let number = n
    .toString()
    .split("")
    .reduce((x, y) => Number(x) + Number(y));
  return digital_root(number);
}
