/* from https://www.codewars.com/kata/513e08acc600c94f01000001 */

function rgb(r, g, b) {
  let result = "";
  let arr = [r, g, b];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      result += "00";
    } else if (arr[i] >= 255) {
      result += "FF";
    } else {
      let hex = arr[i].toString(16).toUpperCase();
      if (hex.length < 2) {
        result += "0";
      }
      result += hex;
    }
  }

  return result;
}
