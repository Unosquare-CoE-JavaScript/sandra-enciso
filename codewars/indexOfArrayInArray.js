/* From https://www.codewars.com/kata/5783ef69202c0ee4cb000265 */
/**
 * EXAMPLE
 * var arrayToSearch = [[1,2],[3,4],[5,6]];
 * var query = [1,2]; // => 0
 * query = [5,6]; // => 2
 * query = [9,2]; // => -1
 */

var searchArray = function (arrayToSearch, query) {
  if (
    !Array.isArray(query) ||
    !Array.isArray(arrayToSearch) ||
    query.length > 2 ||
    arrayToSearch.some((x) => x.length > 2)
  ) {
    throw new Error("¡Ups!");
  }
  let result = -1;
  arrayToSearch.some((x, i, self) => {
    if (x.every((y, j) => y === query[j])) {
      result = i;
      return true;
    }
  });
  return result;
};
