/*
Adapter
A construct which adapts an existing interface X to conform to the required interface Y.
*/

class Point
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }

  toString()
  {
    return `(${this.x}, ${this.y})`;
  }
}

/* A line requires a point to start and a point to end */
class Line
{
  constructor(start, end)
  {
    this.start = start;
    this.end = end;
  }

  toString()
  {
    return `${this.start.toString()}→${this.end.toString()}`;
  }
}

/* Vector object is an array of lines */
class VectorObject extends Array {}

class VectorRectangle extends VectorObject
{
  constructor(x, y, width, height)
  {
    //This is your rectangle
    super();
    this.push(new Line(new Point(x,y), new Point(x+width, y) ));
    this.push(new Line(new Point(x+width,y), new Point(x+width, y+height) ));
    this.push(new Line(new Point(x,y), new Point(x, y+height) ));
    this.push(new Line(new Point(x,y+height), new Point(x+width, y+height) ));this.push
  }
}

// ↑↑↑ this is your API ↑↑↑

// ↓↓↓ this is what you have to work with ↓↓↓

let vectorObjects = [
  new VectorRectangle(1, 1, 10, 10),
  new VectorRectangle(3, 3, 6, 6)
];

let drawPoint = function(point)
{
  process.stdout.write('.');
};

// ↓↓↓ to draw our vector objects, we need an adapter ↓↓↓

//Extends to array, because the idea is as follows you have a constructor and you give the constructor a line and it basically turns this line into a set of points
/*
The ideas is that for every single line, the adapter which extends an array, is gooing to add into itself a bunch of points representig a line
*/
class LineToPointAdapter extends Array
{
  constructor(line)
  {
    super();
    console.log(`${LineToPointAdapter.count++}: Generating ` +
      `points for line ${line.toString()} (no caching)`);

    //Algorithm to convert a line to an array of points.
    /*
    Grab the left, right, top and botton locations of that line and then, for every single one of them, use a for loop to generate a set of points
    */
    let left = Math.min(line.start.x, line.end.x);
    let right = Math.max(line.start.x, line.end.x);
    let top = Math.min(line.start.y, line.end.y);
    let bottom = Math.max(line.start.y, line.end.y);

    if (right - left === 0)
    {
      for (let y = top; y <= bottom; ++y)
      {
        this.push(new Point(left, y));
      }
    }
    else if (line.end.y - line.start.y === 0)
    {
      for (let x = left; x <= right; ++x)
      {
        this.push(new Point(x, top));
      }
    }
  }
}
LineToPointAdapter.count = 0;

/*
For every single vector object of vector objects, what we do is we get every single one of their lines.
*/
let drawPoints = function()
{
  for (let vo of vectorObjects)
    for (let line of vo)
    {
      let adapter = new LineToPointAdapter(line); //here we make an adapter
      adapter.forEach(drawPoint);
    }
};

drawPoints();
drawPoints();