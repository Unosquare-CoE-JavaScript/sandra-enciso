/* from https://www.codewars.com/kata/550498447451fbbd7600041c */

/**
 * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 */

function comp(a, b) {
  if (a && b) {
    var isSame = true;
    for (let i = 0; i < b.length; i++) {
      let bSqrt = Math.sqrt(b[i]);
      for (let j = 0; j < a.length; j++) {
        if (bSqrt === a[j]) {
          a.splice(j, 1);
          isSame = true;
          break;
        } else {
          isSame = false;
        }
      }
      if (!isSame) {
        return false;
      }
    }
    return isSame;
  } else {
    return false;
  }
}
