/*
VISITOR
A component (visitor) that knows how to traverse a data structure composed of (possibly related) types.
*/
/* This example avalues expressions like 1+(2+3) and does not follow the open closed principle */
class NumberExpression
{
  constructor(value)
  {
    this.value = value;
  }

  print(buffer)
  {
    buffer.push(this.value.toString());
  }
}

class AdditionExpression
{
  constructor(left, right)
  {
    this.left = left;
    this.right = right;
  }

  //Print the Addition Expression
  print(buffer)
  {
    buffer.push('(');
    this.left.print(buffer); //print the left side
    buffer.push('+');
    this.right.print(buffer); //print the right side
    buffer.push(')');
  }
}

// 1 + (2+3)
let e = new AdditionExpression(
  new NumberExpression(1),
  new AdditionExpression( //Recives two number expression
    new NumberExpression(2),
    new NumberExpression(3)
  )
);
let buffer = [];
e.print(buffer);
console.log(buffer.join(''));


