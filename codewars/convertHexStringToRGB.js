/* from https://www.codewars.com/kata/5282b48bb70058e4c4000fa7 */

function hexStringToRGB(hexString) {
  let r = parseInt(hexString.charAt(1) + hexString.charAt(2), 16);
  let g = parseInt(hexString.charAt(3) + hexString.charAt(4), 16);
  let b = parseInt(hexString.charAt(5) + hexString.charAt(6), 16);
  return { r, g, b };
}
