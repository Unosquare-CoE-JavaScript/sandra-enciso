/*
A magic square is a square matrix of numbers where the sum in each row, each column, and each of the diagonals is the same.
You are given a system of 3 classes that can be used to make a magic square. The classes are:
Generator: This class generates 1-dimensional list of random digits in range 1 to 6
Splitter: This class takes a 2D list and splits it into all possible arrangements of 1D lists, it gives you the columns, the rows and the two diagonals.
Verifier: This class takes a 2D list and verifies that the sum of elements in every sublist is the same
*/

/*Generates 1-dimensional list of random digits in a range 1 to 6*/
class Generator
{
  generate(count)
  {
    let result = [];
    for (let i = 0; i < count; ++i)
      result.push(Math.floor((Math.random() * 6) + 1));
    return result;
  }
}

class Splitter
{
  split(array)
  {
    let result = [];

    let rowCount = array.length;
    let colCount = array[0].length;

    // get the rows
    for (let r = 0; r < rowCount; ++r)
    {
      let theRow = [];
      for (let c = 0; c < colCount; ++c)
      {
        theRow.push(array[r][c]);
      }
      result.push(theRow);
    }

    // get the columns
    for (let c = 0; c < colCount; ++c)
    {
      let theCol = [];
      for (let r = 0; r < rowCount; ++r)
      {
        theCol.push(array[r][c]);
      }
      result.push(theCol);
    }

    // now the diagonals
    let diag1 = [];
    let diag2 = [];
    for (let c = 0; c < colCount; ++c)
    {
      for (let r = 0; r < rowCount; ++r)
      {
        if (c === r)
          diag1.push(array[r][c]);
        let r2 = rowCount - r - 1;
        if (c === r2)
          diag2.push(array[r][c]);
      }
    }

    result.push(diag1);
    result.push(diag2);

    return result;
  }
}

//This class takes a 2D list and verifies that the sum of elements in every sublist is the same
class Verifier
{
  verify(array)
  {
    if (array.length < 1) return false;
    let adder = function(p, c)
    {
      return p + c;
    };
    let expected = array[0].reduce(adder);
    let ok = true;
    array.forEach(function (subarray) {
      if (subarray.reduce(adder) !== expected) {
        ok = false;
      }
    });
    return ok;
  }
}

class MagicSquareGenerator {
    generate(size) {
        const g = new Generator();
        const s = new Splitter();
        const v = new Verifier();
        let msq;

        do {
            const list2d = []; 
            for(let i = 0; i < size; i++) {
                list2d.push(g.generate(size));
            }

            msq = s.split(list2d);
        } while(!v.verify(msq));

        return msq;
    }
}

/*
SUMMARY
Build a Facade to provide a simplified API over a set of classes
May wish to (optionally) expose internals through the facade
May allow users to 'esclate' to use more complex API's if they need to
*/