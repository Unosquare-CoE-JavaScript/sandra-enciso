/*
Turn a simple numeric expression into a sequence of tokens.
Then  turn those tokens into some sort of object orientes structure
Making an expression tree
*/

/* Integer value */
class Integer
{
  constructor(value)
  {
    this.value = value;
  }
}
/* Only can be addition or substraction */
let Operation = Object.freeze({
  addition: 0,
  subtraction: 1
});

/*
Recursive procedure where you have to look at all the constituent parts
*/
class BinaryOperation
{
  constructor() //don't have arguments because we are traversing all the whole thing, and we're going to be customizing an existing binary operation object
  //rather than creating one from scratch
  { 
    this.type = null; //Type of the binary operation
    this.left = null; //lef side of the expression
    this.right = null; //right side of the expression
  }

  get value()
  {
    switch (this.type)
    {
      case Operation.addition: //addition operation
        return this.left.value + this.right.value;
      case Operation.subtraction: //substraction operation
        return this.left.value - this.right.value;
    }
    return 0;
  }
}

let TokenType = Object.freeze({
  integer: 0,
  plus: 1,
  minus: 2,
  lparen: 3,
  rparen: 4
});

class Token
{
  constructor(type, text)
  {
    this.type = type;
    this.text = text;
  }

  toString()
  {
    return `\`${this.text}\``;
  }
}

function lex(input)
{
  let result = [];

  for (let i = 0; i < input.length; ++i)
  {
    switch (input[i])
    {
      case '+':
        result.push(new Token(TokenType.plus, '+'));
        break;
      case '-':
        result.push(new Token(TokenType.minus, '-'));
        break;
      case '(':
        result.push(new Token(TokenType.lparen, '('));
        break;
      case ')':
        result.push(new Token(TokenType.rparen, ')'));
        break;
      default:
        let buffer = [input[i]];
        for (let j = i+1; j < input.length; ++j)
        {
          if ('0123456789'.includes(input[j]))
          {
            buffer.push(input[j]);
            ++i;
          } else {
            result.push(new Token(TokenType.integer,
              buffer.join('')));
            break;
          }
        }
        break;
    }
  }

  return result;
}

/* Takes a bunch of tokens, evaluates them and returns the result */
function parse(tokens)
{
  let result = new BinaryOperation();
  let haveLHS = false; //This flag determines whether or not we have the left hand side of that expression

  //going through the tokens
  for (let i = 0; i < tokens.length; ++i) {
    let token = tokens[i];

    switch (token.type) { //switch which type of token is
      case TokenType.integer:
        let integer = new Integer(parseInt(token.text));
        if (!haveLHS) { //Put the integer in the left or right side of the expression
          result.left = integer;
          haveLHS = true;
        } else {
          result.right = integer;
        }
        break;
      case TokenType.plus: //Addition operation
        result.type = Operation.addition;
        break;
      case TokenType.minus: //Substraction operation
        result.type = Operation.subtraction;
        break;
      case TokenType.lparen: /// If we have something inside the round brackets, we must to take it and pass it into the function itself doing a recursive call
        let j = i; //new counter
        for (; j < tokens.length; ++j) // going through the remain tokens until find ')'
          if (tokens[j].type === TokenType.rparen)
            break; // found it!
        // process subexpression
        let subexpression = tokens.slice(i + 1, j); //Slices to store the subexpression inside '()'
        let element = parse(subexpression);
        if (!haveLHS) {
          result.left = element;
          haveLHS = true;
        } else result.right = element;
        i = j; // advance
        break;
    }
  }
  return result;
}

let input = "(13+4)-(12+1)";
let tokens = lex(input);
console.log(tokens.join('  '));

let parsed = parse(tokens);
console.log(`${input} = ${parsed.value}`);