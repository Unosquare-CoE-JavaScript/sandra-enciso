/*
You are asked to implement the Builder design pattern for rendering simple chunks of code.
Sample use of the builder you are asked to create:

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());

The expected output of the above code is:
Class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
}

Please observe the same placement of spaces an identation

*/

/* This example creates a string which contains a new constructor class, we can specify the properties of the new class */
class Field //field
{
  constructor(name)
  {
    this.name = name;
  }
}

class Class //constructs a class
{
  constructor(name)
  {
    this.name = name; //name of a new class
    this.fields = []; //array of the fields (properties) of a class
  }

  toString() //goes through the fields to concat them to the class
  {
    let buffer = [];
    buffer.push(`class ${this.name} {\n`);

    if (this.fields.length > 0) {
      buffer.push(`  constructor(`);
      for (let i = 0; i < this.fields.length; ++i) {
        buffer.push(this.fields[i].name);
        if (i + 1 !== this.fields.length)
          buffer.push(', ');
      }
      buffer.push(`) {\n`);
      for (let field of this.fields) {
        buffer.push(`    this.${field.name} = ${field.name};\n`);
      }
      buffer.push('  }\n');
    }

    buffer.push('}');
    return buffer.join('');
  }
}

class CodeBuilder //Constructor (base class)
{
  constructor(className)
  {
    this._class = new Class(className);
  }

  addField(name) //adds a new field (property) to the new classs
  {
    this._class.fields.push(
      new Field(name)
    );
    return this;
  }

  toString()
  {
    return this._class.toString();
  }
}

let cb = new CodeBuilder('Foo');
let cb = new CodeBuilder('Person');
    cb.addField('name').addField('age');

/*
SUMMARY
A builder ir a separate component for building an object.
Can either give builder an initializar or return it via a static function.
To make builder fluent, return self.
Different facents of an object can be built with different builders working in tandem via a base class
*/