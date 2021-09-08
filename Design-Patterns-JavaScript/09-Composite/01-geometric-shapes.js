/*
COMPOSITE
A mechanism for treating individual (scalar) objects and compositions of objects in a uniform manner (same manner)
-Objects use other object's fields/methods through inheritance and composition
-Composition let us make compound objects
    eg a mathematical expression composed of simple expressions, or
    a shape group made of several different shapes
-Composite design patter is used to treat both single (scalar) and composite objects uniformly
    ie. class Foo and an array (containing Foos) having the same API
*/

/*
Constructing an object which consists of several other graphic objects.
*/
class GraphicObject
{
  get name()
  {
    return this._name;
  }

  constructor(name='Group ' + (GraphicObject.count++))
  {
    this.children = []; //the reason why we have a set of children is because this graphic object can act eitheras a group, in which case it has a number of other graphic objects inside it,
    //or can act as a standalone
    this.color = undefined;
    this._name = name;
  }

  //we use that buffer to put a number of asteriks representing the depth that we are in and print out all the objects, including their colors
  print(buffer, depth)
  {
    buffer.push('*'.repeat(depth));
    if (depth > 0)
      buffer.push(' ');
    if (this.color)
      buffer.push(this.color + ' ');
    buffer.push(this.name);
    buffer.push('\n');

    for (let child of this.children)
      child.print(buffer, depth+1);
  }

  toString()
  {
    let buffer = [];
    this.print(buffer, 0);
    return buffer.join('');
  }
}
GraphicObject.count = 0; // Counting the groups of shapes 

class Circle extends GraphicObject
{
  constructor(color)
  {
    super('Circle'); //Provide a name of Graphic Object
    this.color = color;
  }
}

class Square extends GraphicObject
{
  constructor(color)
  {
    super('Square');
    this.color = color;
  }
}

let drawing = new GraphicObject();
drawing.children.push(new Square('Red'));
drawing.children.push(new Circle('Yellow'));

let group = new GraphicObject();
group.children.push(new Circle('Blue'));
group.children.push(new Square('Blue'));
drawing.children.push(group); //pushing group to drawing object

console.log(drawing.toString());