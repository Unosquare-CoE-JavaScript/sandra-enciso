/* from https://www.codewars.com/kata/5467e4d82edf8bbf40000155 */
/**
 * Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
 * Essentially, rearrange the digits to create the highest possible number.
 */
function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .map(Number)
      .sort((x, y) => y - x)
      .join("")
  );
}