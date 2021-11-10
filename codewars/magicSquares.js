/* from https://www.codewars.com/kata/58c979aafd407d6e9f000071 */

/**
 * Magic squares are numbers in an n x n grids, where the sum of numbers sides and diagonals all give the same sum
 * Validate a magis square
 */

function sumsTuples(arr) {
  let sumsTuples = [];
  arr.forEach((x, i) => {
    sumsTuples.push(x.reduce((a, b) => a + b));
  });
  return sumsTuples;
}

function sumsRows(arr) {
  let sumsRows = [];
  for (let i = 0; i < arr.length; i++) {
    sumsRows[i] = [];
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (i == k) {
          sumsRows[i].push(arr[j][k]);
        }
      }
    }
  }

  return sumsRows.map((x, i) => x.reduce((a, b) => a + b));
}

function sumDiagonal1(arr) {
  return arr
    .map((a, i) => a.filter((b, j) => i === j))
    .map((a) => a[0])
    .reduce((a, b) => a + b);
}

function sumDiagonal2(arr) {
  return arr
    .map((a, i) => a.reverse().filter((b, j) => i === j))
    .map((a) => a[0])
    .reduce((a, b) => a + b);
}

function magicSquare(arr) {
  if (arr.length === 0 || arr.every((x) => x === null || x === undefined)) {
    return false;
  }
  //sum tuples
  var tuples = sumsTuples(arr);

  //sum rows
  var rows = sumsRows(arr);

  //sum diagonal
  var diagonal1 = sumDiagonal1(arr);

  //sum diagonal2
  var diagonal2 = sumDiagonal2(arr);

  if (
    diagonal1 === diagonal2 &&
    tuples.every((a) => a === diagonal1) &&
    rows.every((a) => a === diagonal1)
  ) {
    return true;
  } else {
    return false;
  }
}
