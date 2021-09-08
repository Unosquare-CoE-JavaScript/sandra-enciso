/*
You are given a class called Square and a function calculateArea() which calculates the area of a given rectangle.
In order to use Square in calculate_area, instead of augmenting it with width/height members, please implement the SquareToRectangleAdapter class.
This adapter takes a square and adapts it in such a way that it can be used as an argument to calculateArea().
*/

class Square
{
  constructor(side)
  {
    this.side = side;
  }
}

function calculateArea(rectangle)
{
  return rectangle._width * rectangle._height;
}

class SquareToRectangleAdapter {
    constructor(sq) {
        this._width = sq.side;
        this._height = sq.side;
    }
}


let sq = new Square(4);
console.log(calculateArea(new SquareToRectangleAdapter(sq)));

/*
SUMMARY
Implementing an Adapter is easy
Determine the API you have and the API you need
Create a component which aggregates (has a reference to,...) the adaptee
Intermediate representations can pile up: use caching and other optimizations

*/