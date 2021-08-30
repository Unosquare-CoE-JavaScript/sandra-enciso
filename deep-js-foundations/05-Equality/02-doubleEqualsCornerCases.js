/*
Encompasses == Corner Cases
*/
/*
Avoid:
1. == with 0 or "" (or even " ")
2. == with non-primitives
3. == true or == false: allow ToBoolean or use ===
*/
/*
The case for preferring ==
== Is not about comparisons with unknown types
== Is about comparisons with known types(s), optionally where conversions are helpful
If you know the type(s) in a comparison:
if both types are the same, == is identical to ===
Using === would be unnecessary, so prefer the shroter ==
Since === is pointless when the types don't march, it's similary unnecessary when they do match
Summary: Whether the types match or not, == is the more sensible choice
*/
/*
If you don't know the type(s) in a comparison:
Not knowing the types means not fully understanding that code. So, best to refactor so you can know the types
If you can't or won't use known and obvious types, === is the only reasonable choice
Making types known and obvious leads to better code. If types are known, == is best.
Otherwise, fall back to ===
*/

[] == ![] //true what?

var workshop1Students = [];
var workshop2Students = [];

if ( workshop1Students == !workshop2Students ) {
  console.log('??'); //it runs
} //How works? the answer below

// if ( workshop1Students == !workshop2Students ) {
// if ( [] == false ) {
// if ( "" == false ) {
// if ( 0 == false ) {
// if ( 0 === 0 ) {
if(true){
  console.log('this is how it works!');
}


if ( workshop1Students != workshop2Students ) {
  console.log('??'); //it runs too
}
// if ( workshop1Students != workshop2Students ) {
// if ( !(workshop1Students == workshop2Students) ) {
// if ( !(false) ){
if (true) {
  console.log('this is how it works!');
}

//*************************************
// == CORNER CASES: BOOLEANS
var workshopStudents = [];

if (workshopStudents) {
  console.log('Yep'); //it runs!
}//Why?

// if (workshopStudents) {
// if (Boolean(workshopStudents)) {
if(true){
  //Yep
}

if (workshopStudents == true) {
  console.log('Nope :('); //it doesn't run
}//Why?

// if (workshopStudents == true) {
// if ("" == true) {
// if (0 === 1) {
if(false) {
  //Nope
}

if (workshopStudents == false) {
  console.log('Yep :('); //it runs
}//Why?

// if (workshopStudents == false) {
// if ("" == false) {
// if (0 === 0) {
if (true) {
  //Yep
}