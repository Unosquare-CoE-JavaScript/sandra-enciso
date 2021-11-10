/* from https://www.codewars.com/kata/5263a84ffcadb968b6000513 */
/**
 * Write a function that accepts two square (NxN) matrices (two dimensional arrays), and returns the product of the two. Only square matrices will be given.
 */

function matrixMultiplication(a, b) {
  var result = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = [];
    for (let j = 0; j < a[i].length; j++) {
      let sum = 0;
      for (let k = 0; k < a[i].length; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i].push(sum);
    }
  }
  return result;
}
