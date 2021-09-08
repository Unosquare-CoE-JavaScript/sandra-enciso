/*
You are asked to implement a visitor called ExpressionPrinter for printing different mathematical expressions.
The range of expressions covers addition and multiplication - please put round brackets around addition operations (but not multiplication ones)! Also, please avoid any blank spaces in output
Example
Input: AdditionExpression(Value(2), Value(3))
Output: (2+3)
let simple = new AdditionExpression(
    new Integer(2), new Integer(3)
);
let ep = new ExpressionPrinter();
ep.visitAddition(simple);
ep.toString(); //(2+3)
*/

class Integer
{
    constructor(value)
    {
        this.value = value;
    }

    accept(visitor)
    {
        visitor.visitValue(this);
    }
}

class BinaryExpression
{
    constructor(lhs, rhs)
    {
        this.lhs = lhs;
        this.rhs = rhs;
    }
}

class AdditionExpression extends BinaryExpression
{
    constructor(lhs, rhs) {
        super(lhs, rhs);
    }

    accept(visitor)
    {
        visitor.visitAddition(this);
    }
}

class MultiplicationExpression extends BinaryExpression
{
    constructor(lhs, rhs) {
        super(lhs, rhs);
    }

    accept(visitor)
    {
        visitor.visitMultiplication(this);
    }
}

class ExpressionPrinter
{
    constructor()
    {
        this._buffer = [];
    }

    visitValue(value)
    {
        this._buffer.push(value.value);
    }

    visitAddition(ae)
    {
        this._buffer.push('(');
        ae.lhs.accept(this);
        this._buffer.push('+');
        ae.rhs.accept(this);
        this._buffer.push(')');
    }

    visitMultiplication(me)
    {
        me.lhs.accept(this);
        this._buffer.push('*');
        me.rhs.accept(this);
    }

    toString()
    {
        return this._buffer.join('');
    }
}

let simple = new AdditionExpression(
    new Integer(2), new Integer(3)
);
let ep = new ExpressionPrinter();
ep.visitAddition(simple);
console.log(ep.toString()); //(2+3)

const expr = new MultiplicationExpression(
    new AdditionExpression(new Integer(2), new Integer(3)),
    new Integer(4)
);
let ep = new ExpressionPrinter();
ep.visitMultiplication(expr);
console.log(ep.toString()); //(2+3)*4

/*
SUMMARY
Propagate an accept (Visitor v) method throghout the entire hierarchy
Create a visitor with visitFoo (Foo), visitBar (Bar), ...for each element in the hierarchy
Each accept() simply calls visitor.visitXxx(this)
*/