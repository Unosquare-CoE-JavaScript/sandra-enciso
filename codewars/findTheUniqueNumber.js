/* From https://www.codewars.com/kata/585d7d5adb20cf33cb000235 */
/**
 * EXAMPLE findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 */
function findUniq(arr) {
  return arr.find((x, _, self) => self.indexOf(x) === self.lastIndexOf(x));
}
