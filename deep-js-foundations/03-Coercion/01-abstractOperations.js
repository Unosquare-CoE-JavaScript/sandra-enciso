/*
Encompasses To String, To Number, To Boolean
*/
/*
Abstract Operations
These operations are not a part of ECMAScript language, they are defined here to solely to aid the specification of the semantics
of the ECMAScript language.
Type Conversion aka 'COERCION'
The ECMAScript language implicitly performs automatic type converion as needed. To clarify the semantics of certain constructs it is
useful to define a set of conversion abstract operations.
The conversion abstract operations are polymorphic, they can accept a value of any ECMAScript language type. But no other specification
types are used with these operations.
*/

/* The examples below shows how Type Conversion or Coercion works and how returns different values depending the value to change */

 /* To String */
console.log(`${ null }`); // 'null'
console.log(`${ undefined }`); // 'undefined'
console.log(`${ true }`); // 'true'
console.log(`${ false }`); // 'false'
console.log(`${ 3.14159 }`); // '3.14159'
console.log(`${ 0 }`); // '0'
console.log(`${ -0 }`); // '0' All works fine, exect Negative Zero

//Using Arrays
//Converts all the values of the array into String including ','
console.log(`${ [] }`); // '' empty value
console.log(`${ [1,2,3] }`); // '1,2,3' 
console.log(`${ [null, undefined] }`); // ',' null and undefined are empty values when these are inside brackets.
console.log(`${ [[[],[],[]],[]] }`); // ',,,'
console.log(`${ [,,,,] }`); // ',,,'

//Using Objects
//If the value inside is a function, returns the return value of the function
console.log(`${ {} }`); // '[object Object]'
console.log(`${ {a:2} }`); // '[object Object]'
console.log(`${ {toString(){return "X";}} }`); // 'X'

/* To Number */

Number( '' ); // 0
Number( '0' ); // 0
Number( '-0' ); // -0
Number( ' 009 ' ); // 9
Number( '3.14159' ); // 3.14159
Number( '0.' ); // 0
Number( '.0' ); // 0
Number( '.' ); // NaN
Number( '0xaf' ); // 175 Hex notation

Number( false ); // 0
Number( true ); // 1
Number( null ); // 0
Number( undefined ); // NaN

Number( [''] ); // 0
Number( ['0'] ); // 0
Number( ['-0'] ); // -0
Number( [null] ); // 0
Number( [undefined] ); // 0
Number( [1,2,3] ); // NaN
Number( [[[[]]]] ); // 0

var valueOf = () => 3;

Number( {} ); // NaN
Number( valueOf() ); // 3 the value of the return function

/* To Boolean */
//Helps to know if a value is empty
Boolean( '' ) // false
Boolean( 0, -0 ) // false
Boolean( null ) // false
Boolean( NaN ) // false
Boolean( false ) // false
Boolean( undefined ) // false

Boolean( 'foo' ) // true
Boolean( 23 ) // true
Boolean( {a:1} ) // true
Boolean( [1,3] ) // true
Boolean( true ) // true
Boolean( function(){} ) // true