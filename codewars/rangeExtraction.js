/* from https://www.codewars.com/kata/51ba717bb08c1cd60f00002f */
function solution(arr) {
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
      if (!(result[result.length - 1] == "-")) {
        result.push("-");
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

  return range;
}

function printRanges(ranges) {
  console.log(ranges);
  let result = ranges[0] + "";
  for (let i = 1; i < ranges.length; i++) {
    if (Number.isInteger(ranges[i - 1]) && Number.isInteger(ranges[i])) {
      result += `,${ranges[i]}`;
    } else {
      //es -
      if (ranges[i] === "-" && !(ranges[i - 1] === ranges[i + 1] - 1)) {
        result += "-";
      } else if (Number.isInteger(ranges[i])) {
        if (result.charAt(result.length - 1) === "-") {
          result += `${ranges[i]}`;
        } else {
          result += `,${ranges[i]}`;
        }
      }
    }
  }
  return result;
}
