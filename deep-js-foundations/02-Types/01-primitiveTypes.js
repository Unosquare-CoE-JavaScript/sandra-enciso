/*
Encompasses Primitive Types, typeof Operator, BigInt, Kinds of Emptiness
*/
/* 
An ECMAScript language type corresponds to values that are directly manipulated by an ECMAScript
programmer using the ECMAScript language.
The ECMAScript language types are Undefined, Null, Boolean, String, Symbol, Number and Object.

In JavaScript, variables don't have types, values do.

Primitive types: Undefined, String, Number, Boolean, Null, Undefined, Symbol
Objects: Object, Function, Array, 
*/

var v;
typeof v; // 'undefined'
v = '1';
typeof v; //'string'
v = 2;
typeof v; // 'number'
v = true;
typeof v; // 'boolean'
v = {};
typeof v; // 'object'
v = Symbol();
typeof v; //'symbol'
v = null;
typeof v; // 'object'
v = function(){};
typeof v; //'function'
v = [1,2,3];
typeof v; //'object'

v = 42n;
// or: BigInt(42)
typeof v; //'bigint'

typeof doesntExist; //'undefined'

/*
Undefined
A variable that doesn't have an assigned value

Undeclared
A variable that isn't declared (doesn't exist)

Unitialized (aka Temporal Dead Zone TDZ)
Temporal Dead Zone is the term to describe the state where variables are un-reachable. 
They are in scope, but they aren't declared.
*/