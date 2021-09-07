//Line.deepCopy() to perform a deep copy of the given Line object. This method should return a copy of a Line that contains copies of its start/end points.
class Point
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }
  
  deepCopy() 
  {
      return new Point(this.x, this.y)
  }
}

class Line
{
  constructor(start, end)
  {
    this.start = start;
    this.end = end;
  }

  deepCopy()
  {
    // todo
    return new Line(this.start.deepCopy(), this.end.deepCopy());
  }
}

//let proto = new Line(p1, p2);

let p1 = new Point(1, 2);
let p2 = new Point(2, 4);
let p3 = new Point(4, 8);

let nl = new Line(p1, p2);

let nl2 = nl.deepCopy();

nl.start = p3;

console.log('nl start', nl.start); //{ x: 4, y: 8 }
console.log('nl end', nl.end); //{ x: 2, y: 4 }

console.log('nl2 start', nl2.start); //{ x: 1, y: 2 }
console.log('nl2 end', nl2.end);  //{ x: 2, y: 4 }

/*
*To implement a prototype, partially construct an object and store it somewhere
*Deep copy the prototype
*Costumize the resulting instance
*A factory provides a convenient API for using prototypes
*/