/* From https://www.codewars.com/kata/525f4206b73515bffb000b21 */
/**
 * Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
 */
function add(a, b) {
  var result = "",
    limit;
  var carry = 0;
  var aLength = a.length;
  var bLength = b.length;

  if (aLength < bLength) {
    limit = bLength;
    let remain = bLength - aLength;
    a = addZeros(remain, a);
  } else {
    limit = aLength;
    let remain = aLength - bLength;
    b = addZeros(remain, b);
  }

  function addZeros(qty, oldNumber) {
    let newNumber = oldNumber;
    for (let i = 0; i < qty; i++) {
      newNumber = "0" + newNumber;
    }
    return newNumber;
  }

  function sumNumbers(a, b) {
    for (let i = limit - 1; i >= 0; i--) {
      let aux = Number(a.charAt(i)) + Number(b.charAt(i)) + Number(carry);
      if (aux.toString().length > 1) {
        carry = aux.toString().charAt(0);
        result = aux.toString().charAt(1) + result;
      } else {
        carry = 0;
        result = aux + result;
      }
    }

    if (carry) {
      result = carry + result;
    }

    return result;
  }

  return sumNumbers(a, b);
}
