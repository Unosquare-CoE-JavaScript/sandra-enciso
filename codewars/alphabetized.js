/* From https://www.codewars.com/kata/525f4206b73515bffb000b21 */
/**
 * EXAMPLE alphabetized("The Holy Bible") // "BbeehHilloTy"
 */

function alphabetized(s) {
  let chars = s.match(/[a-zA-Z]/g);
  if (!chars) {
    return "";
  }
  return sortLetters(chars).join("");
}

function sortLetters(array) {
  if (array.length < 1) {
    return [];
  }

  let left = [],
    rigth = [],
    pivot = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i].toLowerCase() < pivot.toLowerCase()) {
      left.push(array[i]);
    } else {
      rigth.push(array[i]);
    }
  }

  return [].concat(sortLetters(left), pivot, sortLetters(rigth));
}
