/*
Encompasses: Equality Comparison, Strict Equality Comparison, Coercive Equality
*/
/*
== allows coercion (types different)
=== disallows coercion (types same)
Abstract Equality Comparison
Using == how works?
If typeOf(x) is the same as typeOf(y), then
return the result of performing Strict Equality Comparison x === y.
otherwise, compares using coercion

Strict Equality Comparison (===)
1. If typeOf(x) is different from typeOf(y), return false.
2. If typeOf(x) is Number, then
    - If x is NaN, return false.
    - If y is NaN, return false.
    - If x is the same Number value as y, return true.
    - If x is +0 and y is -0, return true.
    - If x is -0 and y is +0, return true.
    - Return false.
3. Return SameValueNonNumber(x,y);
*/

/* Coercive Equality: == and === */
var studentName1 = 'Frank';
var studentName2 = `${ studentName1 }`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2; //true
studentName1 === studentName2; //true

workshopEnrollment1 == workshopEnrollment2;
workshopEnrollment1 === workshopEnrollment2;

//*********************
//In this example, the if statement never runs becase objects aren't primitive values
//Objects values are referenced by pointers, so the objects doesn't have the same pointers
//So workshop1 and workshop2 aren't equals
var workshop1 = {
  name: "Deep JS Foundations"
};

var workshop2 = {
  name: "Deep JS Foundations"
};

if (workshop1 == workshop2){
  // Nope
}

if (workshop1 === workshop2){
  // Nope
}

//***********************
//COERCIVE EQUALITY USING == AND ===
var workshop2Elem = {};
workshop2Elem.value = '16';

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshop2Elem.value; 

if(Number(workshopEnrollment1) === Number(workshopEnrollment2)){
  console.log('is the same?') //It runs because first, it did the Number conversion
}

if(workshopEnrollment1 == workshopEnrollment2){
  console.log('is the same?') //It runs because coercion works here
}

//*****************
//COERCIVE EQUALITY: ONLY PRIMITIVES
var workshop1Count = 42;
var workshop2Count = [42];

if ( workshop1Count == workshop2Count ) {
  console.log('is the same?') //It runs because coercion works here
}
///How it works? below
// if (workshop1Count == workshop2Count){
// if (42 == "42"){
// if (42 === 42){
if (true){
  console.log('this is how it works');
}

/*
== SUMMARY:
If the types are the same: ===
If null or undefined: equal
If non-primitives: ToPrimitive
Prefer: ToNumber
*/