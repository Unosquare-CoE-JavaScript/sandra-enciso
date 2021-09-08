/*
DECORATOR
Facilitates the addition of behaviors to individual objects without inheriting from them.

Want to augment an object with additional functionality
Do not want to rewrite or alter existing code (OCP)
Want to keep new functionality separate (SRP)
Need to be able to interact with existing structures
Two options:
    Inherit from required object (if possible)
    Build a Decorator, which simply references the decorated object(s)

Decoretor is just a class which wraps the original class and adds addtional information or additional functionality on the side. 
*/

class Shape {/* Abstract */}

class Circle extends Shape
{
  constructor(radius=0)
  {
    super();
    this.radius = radius;
  }

  resize(factor)
  {
    this.radius *= factor;
  }

  toString()
  {
    return `A circle of radius ${this.radius}`;
  }
}

class Square extends Shape
{
  constructor(side=0)
  {
    super();
    this.side = side;
  }

  toString()
  {
    return `A square with side ${this.side}`;
  }
}

/* Provide a constructor which takes the underlying shape that you want to decorate and the color that you want to decorate it with*/
// we don't want ColoredSquare, ColoredCircle, etc. Decorator is shape
class ColoredShape extends Shape
{
  constructor(shape, color)
  {
    super();
    this.shape = shape;
    this.color = color;
  }

  toString()
  {
    return `${this.shape.toString()} ` +
      `has the color ${this.color}`;
  }
}

/* First aply the colored shape decorator and then aply a transparente decorator */
class TransparentShape extends Shape
{
  constructor(shape, transparency)
  {
    super();
    this.shape = shape;
    this.transparency = transparency;
  }

  toString()
  {
    return `${this.shape.toString()} has ` +
      `${this.transparency * 100.0}% transparency`;
  }
}

let circle = new Circle(2);
console.log(circle.toString());

let redCircle = new ColoredShape(circle, 'red'); //the first argument is the shape we're trying to decorate, and the second is the color.
redCircle.shape.resize(2) //underlying object
console.log(redCircle.toString());

// impossible: redHalfCircle is not a Circle
//redHalfCircle.resize(2);

let redHalfCircle = new TransparentShape(redCircle, 0.5); //Half red transparency
console.log(redHalfCircle.toString());

