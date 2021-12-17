/* From https://www.codewars.com/kata/5839edaa6754d6fec10000a2 */
/**
 * Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
 * EXAMPLES ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
 */

function findMissingLetter(array) {
  let charCodes = array.map((x) => x.charCodeAt(0));
  let result = charCodes.find(
    (x, i, self) => x != self[i + 1] - 1 && i != self.length - 1
  );
  return String.fromCharCode(result + 1);
}
