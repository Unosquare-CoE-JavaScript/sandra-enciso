/* From https://www.codewars.com/kata/52597aa56021e91c93000cb0 */
/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 */

var moveZeros = function (arr) {
  let newArray = [],
    zeros = [];
  arr.forEach((x) => {
    if (x !== 0) {
      newArray.push(x);
    } else {
      zeros.push(0);
    }
  });
  return [...newArray, ...zeros];
};
