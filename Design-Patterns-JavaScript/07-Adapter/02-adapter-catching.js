/*
When generating temporary objects, we keep regenerating the temporary objects, even though we've already done the work previously.
Sometimes the adapter design patter causes you to generate temporary objects, and if it does, it makes sense to try to cut down on the number of objects you actually generate.
So if you're generating temporaries objects that you've already encountered before, it might make sense to put them into some sort of cache how explains this code.
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

class VectorObject extends Array {}

class VectorRectangle extends VectorObject
{
  constructor(x, y, width, height)
  {
    super();
    this.push(new Line(new Point(x,y), new Point(x+width, y) ));
    this.push(new Line(new Point(x+width,y), new Point(x+width, y+height) ));
    this.push(new Line(new Point(x,y), new Point(x, y+height) ));
    this.push(new Line(new Point(x,y+height), new Point(x+width, y+height) ));this.push
  }
}

// ↑↑↑ this is your API ↑↑↑

// ↓↓↓ this is what you have to work with ↓↓↓

/*
For every given string, it actually gives you a unique 32 bit integer and if a string changes, you're going to have a different integer representing that string
The reason why we're going to do this is we're going to try avoid generating any additional points for a given provided line
*/
String.prototype.hashCode = function(){
  if (Array.prototype.reduce){
    return this.split("").reduce(function(a,b){
      a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
  }
  let hash = 0;
  if (this.length === 0) return hash;
  for (let i = 0; i < this.length; i++) {
    const character = this.charCodeAt(i);
    hash  = ((hash<<5)-hash)+character;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return hash;
};

class LineToPointAdapter extends Array
{
  constructor(line)
  {
    super();

    /*
    Here, we're going to calculate hash code for a given line
    Turning a line into a json
    */

    this.hash = JSON.stringify(line).hashCode();
    if (LineToPointAdapter.cache[this.hash])
      return; // we already have it

    console.log(`${LineToPointAdapter.count++}: Generating ` +
      `points for line ${line.toString()} (with caching)`);

    let points = [];

    let left = Math.min(line.start.x, line.end.x);
    let right = Math.max(line.start.x, line.end.x);
    let top = Math.min(line.start.y, line.end.y);
    let bottom = Math.max(line.start.y, line.end.y);

    if (right - left === 0)
    {
      for (let y = top; y <= bottom; ++y)
      {
        points.push(new Point(left, y));
      }
    }
    else if (line.end.y - line.start.y === 0)
    {
      for (let x = left; x <= right; ++x)
      {
        points.push(new Point(x, top));
      }
    }
    LineToPointAdapter.cache[this.hash] = points;
  }

  get items()
  {
    return LineToPointAdapter.cache[this.hash];
  }
}
LineToPointAdapter.count = 0;
LineToPointAdapter.cache = {}; /*This dictionary is going to have a key of the hash code for the line that we're interested in and the value is going to be an array of the actual points*/

let vectorObjects = [
  new VectorRectangle(1, 1, 10, 10),
  new VectorRectangle(3, 3, 6, 6)
];

let drawPoint = function(point)
{
  process.stdout.write('.');
};

let draw = function()
{
  for (let vo of vectorObjects)
  {
    for (let line of vo)
    {
      let adapter = new LineToPointAdapter(line);
      adapter.items.forEach(drawPoint);
    }
  }
};

draw();
draw();