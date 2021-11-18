/* from https://www.codewars.com/kata/583203e6eb35d7980400002a */

/**
 * Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
 */

//return the total number of smiling faces in the array
function countSmileys(arr) {
  const regex = /[;:]{1}[-~]?[)D]{1}/;
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
      count++;
    }
  }
  return count;
}
