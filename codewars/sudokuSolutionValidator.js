/* from https://www.codewars.com/kata/5324945e2ece5e1f32000370 */
var validNumbers = "123456789";
function validSolution(board) {
  let containsZeros = board.some((x) => x.some((y) => y === 0));
  if (containsZeros) {
    return false;
  }

  //Validate Rows
  let validRows = checkRows(board);

  //Validate Columns
  let validColumns = checkColumns(board);

  //Creates subgrids and then validate
  let subGrids = createSubGrids(board);
  let validSubGrids = checkRows(subGrids); //how we created subgrids and these are stored like rows, then we must check with checkRows function

  return validRows && validColumns && validSubGrids;
}

function checkRows(board) {
  let matrix = Array.from(board, (x) => [...x]); //creates a new array that does not modify the original
  let isValid = matrix.every(
    (x) => x.sort((a, b) => a - b).join("") === validNumbers
  );
  return isValid;
}

function checkColumns(board) {
  //primero creamos un nuevo board que nos convierta las columnas a filas. (trasponer)
  let columnsToRows = transpose(board);
  let isValid = checkRows(columnsToRows);
  return isValid;
}

function transpose(board) {
  let matrix = Array.from(board, (x) => [...x]);
  return Object.keys(matrix[0]).map((colNumber) =>
    matrix.map((rowNumber) => rowNumber[colNumber])
  );
}

function createSubGrids(board) {
  let limitI = 3,
    limitJ = 3,
    result = [],
    auxNums = "";
  let matrix = Array.from(board, (x) => [...x]);
  for (let l = 0; l < 3; l++) {
    limitJ = 3;
    for (let k = 0; k < 3; k++) {
      auxNums = "";
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
          if (i >= limitI - 3 && i < limitI && j >= limitJ - 3 && j < limitJ) {
            auxNums += matrix[i][j] + "";
          }
        }
      }
      result.push(auxNums.split("").map(Number));
      limitJ = limitJ + 3;
    }
    limitI = limitI + 3;
  }
  return result;
}
