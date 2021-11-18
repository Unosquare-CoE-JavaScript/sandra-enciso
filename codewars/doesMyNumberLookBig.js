/* From https://www.codewars.com/kata/5287e858c6b5a9678200083c */
/**
 * Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
 */
function narcissistic(value) {
  let digits = value.toString().length;

  if (digits == 1) {
    return true;
  }

  let sumOfNumbers = value
    .toString()
    .split("")
    .map((x) => Math.pow(x, digits))
    .reduce((x, y) => x + y);
  return sumOfNumbers === value;
}
