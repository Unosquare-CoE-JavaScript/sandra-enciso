/* from https://www.codewars.com/kata/52aae14aa7fd03d57400058f */
/**
 * Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.


 */
function removeZeros(array) {
  var length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] === 0 || array[i] === "0") {
      let zero = array[i];
      for (let j = i; j < array.length; j++) {
        array[j] = array[j + 1];
      }
      array[array.length - 1] = zero;
      length--;
      i--;
    }
  }
  return array;
}
