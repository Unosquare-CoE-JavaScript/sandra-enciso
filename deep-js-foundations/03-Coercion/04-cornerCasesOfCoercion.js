/*
Encompasses corner cases of coercion using Number(), String(), Boolean()
*/
/*
Coercion. Type conversion. The ECMAScript language implicitly performs automatic type conversion as needed.
To clarify the semantics of certain constructs it is useful to define a set of conversion abstract operations.
The conversion abstract operatios are polymorphic, they can accept a value of any ECMAScript language type.
But no other specification types are used with these operations.
*/

//All empty string spaces returns 0
Number( "" ); //0
Number( " \t\n" ); //0
Number( null ); // 0
Number( undefined ); // NaN
Number( [] ); // 0
Number( [1,2,3] ); // NaN
Number( [null] ); // 0
Number( [undefined] ); // 0
Number( {} ); // NaN

String( -0 ); // '0'
String( null ); // 'null'
String( undefined ); // 'undefined'
String( [null] ); // ''
String( [undefined] ); // ''

Boolean( new Boolean(false) ); //true

/* The Root Of All (Coercion) Evil haha*/
var studentsInput = {};
studentsInput.value = '';

Number(studentsInput.value); //0

studentsInput.value = ' \t\n';

Number(studentsInput.value); //0

/****************/

Number(true); // 1
Number(false); // 0

1 < 2; // true
2 < 3; // true
1 < 2 < 3; // true Why? -> Explanation below

(1 < 2) < 3;
(true) < 3;
1 < 3; //true

/*******/

3 > 2; // true
2 > 1; // true
3 > 2 > 1; //false why? 

// Explanation below
(3 > 2) > 1;
(true) > 1;
1 > 1; //false

/*You have to adopt a coding style that makes value types plain and obvious.
A quality JS program embraces coercions, making sure the types involved in every operation are clear.
Thus, corner cases are safely managed.*/