/* In classsic visitor, you give every single class a method called accept, which takes a visitor 
*/
class NumberExpression
{
  constructor(value)
  {
    this.value = value;
  }

  accept(visitor)
  {
    visitor.visitNumber(this);
  }
}

class AdditionExpression
{
  constructor(left, right)
  {
    this.left = left;
    this.right = right;
  }

  accept(visitor)
  {
    visitor.visitAddition(this);
  }
}

//base class
class Visitor
{
  constructor()
  {
    this.buffer = [];
  }
}

//this class print the elements
class ExpressionPrinter extends Visitor
{
  constructor()
  {
    super();
  }

  visitNumber(e)
  {
    this.buffer.push(e.value);
  }

  /*
  When we do this call (accept), if we end up in a number of expression, then we tel the visitor the visit has to visit a number passing in ourserlves as the argument
  and we end up adding the value to the buffer
  */
  visitAddition(e)
  {
    this.buffer.push('(');
    e.left.accept(this); //uses accept. 
    this.buffer.push('+');
    e.right.accept(this);
    this.buffer.push(')');
  }

  toString()
  {
    return this.buffer.join('');
  }
}

/* traverse the entire tree to calculate the result */
class ExpressionCalculator
{
  // this visitor is stateful
  constructor()
  {
    this.result = 0;
  }

  visitNumber(e) //this e is a number expression
  {
    this.result = e.value;
  }

  visitAddition(e) //this e is an addition expression
  {
    e.left.accept(this);
    let temp = this.result;
    e.right.accept(this);
    this.result += temp;
  }
}

let e = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression(
    new NumberExpression(2),
    new NumberExpression(3)
  )
);

var ep = new ExpressionPrinter();
ep.visitAddition(e);

var ec = new ExpressionCalculator();
ec.visitAddition(e);

console.log(
  `${ep.toString()} = ${ec.result}`
);
