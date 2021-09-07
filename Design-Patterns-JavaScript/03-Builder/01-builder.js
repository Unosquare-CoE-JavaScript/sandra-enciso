/*
Gamma Categorization
Design patterns are typicallly split into three categories, called Gamma Categorization
*Creation patterns
    Deal with the creation (construction) of objects.
    Explicit (constructor) vs. implicit (DI, reflection, etc).
    Wholesale (single statement) vs piecewise (step by step)
*Structural patterns
    Concerned with the structure (eg class members)
    Many patterns are wrappers that mimic the underlying class' interface
    Stress the importance of good API design
*Behavorial Patterns
    They are all different
*/ 

/* Builder pattern 
When piecewise object construction is complicated, provide an API for doing it succinctly
Some objects are simple and can be created in a single initializer call. Other objects require a lot of ceremony to create.
Having an object with 10 initializer arguments is not productive. Instead, opt for piecewise construction.
Builder provides an API for constructuring an object step by step
*/

/* This example builds a chunk of HTML code */
class Tag //class Tag represents a single HTML tag
{
  static get indentSize() { return 2; }

  constructor(name='', text='')
  {
    this.name = name;
    this.text = text; //The text inside the tag
    this.children = [];
  }

  /*
  The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
  */
  toStringImpl(indent) //Returns a string to log (all the elements nested or a single tag)
  {
    let html = [];
    let i = ' '.repeat(indent * Tag.indentSize);
    html.push(`${i}<${this.name}>\n`);
    if (this.text.length > 0)
    {
      html.push(' '.repeat(Tag.indentSize * (indent+1)));
      html.push(this.text);
      html.push('\n');
    }

    for (let child of this.children)
      html.push(child.toStringImpl(indent+1));

    html.push(`${i}</${this.name}>\n`);
    return html.join();
  }

  toString()
  {
    return this.toStringImpl(0);
  }

  static create(name) //Creates a new HTML structure (nested tags)
  {
    return new HtmlBuilder(name);
  }
}

//Creates a new HTML structure (nested tags)
class HtmlBuilder
{
  constructor(rootName)
  {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  // non-fluent
  addChild(childName, childText)
  {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
  }

  // fluent
  addChildFluent(childName, childText)
  {
    let child = new Tag(childName, childText);
    this.root.children.push(child);
    return this; //a class ins fluent when return this
  }

  toString()
  {
    return this.root.toString();
  }

  clear()
  {
    this.root = new Tag(this.rootName);
  }

  build()
  {
    return this.root;
  }
}

// just a single paragraph using string concatenation
const hello = 'hello';
let html = []; //Here collects all the elements we want to add
html.push('<p>');
html.push(hello);
html.push('</p>');
console.log(html.join('')); //<p>hello</p>

// a list with 2 words in it
const words = ['hello', 'world'];
html = [];
html.push('<ul>\n');
for (let word of words)
  html.push(`  <li>${word}</li>\n`);
html.push('</ul>');
console.log(html.join());

// ordinary non-fluent builder
//let builder = new HtmlBuilder('ul');
let builder = Tag.create('ul');
for (let word of words)
  builder.addChild('li', word);
//console.log(builder.toString());
let tag = builder.build();
console.log(tag.toString());

// fluent builder
builder.clear();
builder
  .addChildFluent('li', 'foo')
  .addChildFluent('li', 'bar')
  .addChildFluent('li', 'baz');
console.log(builder.toString());

