/* from https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5 */
/**
 * Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
 */
function reverseNumber(n) {
  let numbers = n.toString().replace("-", "").split("").reverse().join("");
  return n < 0 ? Number(`-${numbers}`) : Number(numbers);
}
