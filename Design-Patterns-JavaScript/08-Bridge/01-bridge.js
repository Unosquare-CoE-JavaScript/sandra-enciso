/*
BRIDGE
Is designed for connecting different components together through abstractions.
A mechanism that decouples an interface (hierarchy) from an implementation (hierarchy).
Reminder: JS has duck typing, so definitions of interfaces are not strictly necessary.
*/
/*
In this exercise we conected two clases -> Vector an Shape
*/
class VectorRenderer
{ 
  renderCircle(radius)
  {
    console.log(`Drawing a circle of radius ${radius}`);
  }
}

class RasterRenderer
{
  renderCircle(radius)
  {
    console.log(`Drawing pixels for circle of radius ${radius}`);
  }
}

/*Shape describes any sort of geometric shape */
class Shape
{
  constructor(renderer) //takes the renderer you want to be using for rendering the shape. (vector or pixels)
  {
    this.renderer = renderer;
  }
}

class Circle extends Shape
{
  constructor(renderer, radius) {
    super(renderer);
    this.radius = radius;
  }

  //Draw the circle using the renderer provided
  draw()
  {
    this.renderer.renderCircle(this.radius);
  }
//the factor by which you want to resize the circle * radio
  resize(factor)
  {
    this.radius *= factor;
  }
}

// imagine Square, Triangle
// different ways of rendering: vector, raster
// we don't want a cartesian product of these

let raster = new RasterRenderer(); //raster render (by pixels)
let vector = new VectorRenderer(); //vector render
let circle = new Circle(vector, 5);
circle.draw(); //draw the circle
circle.resize(2); //resize the circle
circle.draw();