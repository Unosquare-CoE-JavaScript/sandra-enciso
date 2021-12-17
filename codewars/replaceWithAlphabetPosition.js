/* from https://www.codewars.com/kata/546f922b54af40e1e90001da */
/**
 * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 */

function alphabetPosition(text) {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let result = text
    .replace(/[\W_\d]/g, "")
    .split("")
    .map((x) => alphabet.indexOf(x.toLowerCase()) + 1);

  return result.join(" ");
}
