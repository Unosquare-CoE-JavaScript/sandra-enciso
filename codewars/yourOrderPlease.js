/* from https://www.codewars.com/kata/55c45be3b2079eccff00010f */
/**
 * Your task is to sort a given string. Each word in the string will contain a single number.
 * This number is the position the word should have in the result.
 */

function order(words) {
  return words
    .split(" ")
    .sort((x, y) => Number(x.match(/\d+/)[0]) - Number(y.match(/\d+/)[0]))
    .join(" ");
}
