/* from https://www.codewars.com/kata/517abf86da9663f1d2000003 */
function toCamelCase(str) {
  if (!str) {
    return "";
  }
  let tokens = str.split(/[-_]/g);
  return tokens
    .map((x, i) => (i !== 0 ? x.charAt(0).toUpperCase() + x.slice(1) : x))
    .join("");
}
