/* from https://www.codewars.com/kata/5324945e2ece5e1f32000370 */
/**
 * Given the string representations of two integers, return the string representation of the sum of those integers.
 */

function sumStrings(a, b) {
  return `${BigInt(a) + BigInt(b)}`;
}
