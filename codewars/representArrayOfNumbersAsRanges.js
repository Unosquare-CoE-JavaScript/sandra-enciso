/* from https://www.codewars.com/kata/58ab002d68ee07c57b000118 */
/**
 * Your task is to take arrays of numbers and compress them into ranges.
 * EXAMPLES
 * The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
 * The number 6 would just be "6"
 * The numbers 3,4,5,6,9 would be "3_6,9"
 */

var values = {
  "": [],
};

function toRange(arr) {
  if (arr.length === 0) {
    return "";
  }

  if (arr.length === 1) {
    values[`${arr[0]}`] = arr;
    return arr[0] + "";
  }

  arr = arr.sort((x, y) => x - y).filter((x, i, self) => x != self[i - 1]);

  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] == arr[i] - 1) {
      if (!(result[result.length - 1] == "_")) {
        result.push("_");
      }
    } else {
      if (!result.includes(arr[i - 1])) {
        result.push(arr[i - 1]);
      }
      result.push(arr[i]);
    }
  }

  if (!result.includes(arr[arr.length - 1])) {
    result.push(arr[arr.length - 1]);
  }

  let range = printRanges(result);

  values[range] = arr;

  return range;
}

function printRanges(ranges) {
  let result = "";
  for (let i = 0; i < ranges.length; i++) {
    if (Number.isInteger(ranges[i - 1]) && Number.isInteger(ranges[i])) {
      result += `,${ranges[i]}`;
    } else {
      result += `${ranges[i]}`;
    }
  }
  return result;
}

// Should return an array
function toArray(str) {
  return values[str];
}
