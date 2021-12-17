/* From https://www.codewars.com/kata/51b6249c4612257ac0000005 */

function solution(roman) {
  let res = 0;
  for (let i = 0; i < roman.length; i++) {
    switch (roman.charAt(i)) {
      case "M":
        res += 1000;
        break;
      case "D":
        res += 500;
        break;
      case "C":
        if (roman.charAt(i + 1) === "D") {
          res += 400;
          ++i;
        } else if (roman.charAt(i + 1) === "M") {
          res += 900;
          ++i;
        } else {
          res += 100;
        }
        break;
      case "L":
        res += 50;
        break;
      case "X":
        if (roman.charAt(i + 1) === "L") {
          res += 40;
          ++i;
        } else if (roman.charAt(i + 1) === "C") {
          res += 90;
          ++i;
        } else {
          res += 10;
        }
        break;
      case "V":
        res += 5;
        break;
      case "I":
        if (roman.charAt(i + 1) === "V") {
          res += 4;
          ++i;
        } else if (roman.charAt(i + 1) === "X") {
          res += 9;
          ++i;
        } else {
          res += 1;
        }
        break;
    }
  }

  return res;
}
