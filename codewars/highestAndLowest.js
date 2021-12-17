/* from https://www.codewars.com/kata/554b4ac871d6813a03000035 */
/**
 * In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 * EXAMPLE highAndLow("1 2 3 4 5");  // return "5 1"
 */

function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
