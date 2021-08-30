/*
Encompasses Negative Zero, Object.is, Math.abs, Math.sign
*/
/*
JavaScript has a feature called signed zeroes, where positive zero (+0) is the same as unsigned zero (0), 
but negative zero (-0) is a different value, albeit one that behaves similarly.
JavaScript implements the IEEE Standard for Floating-Point Arithmetic (IEEE 754), which has signed zeroes.
*/

/* 
This example uses Negative Zero. This value has an unusual behavior when compares with 0
And when is converted to string too.
*/

var trendRate = -0; // Negative Zero!
trendRate === -0; // true

trendRate.toString(); // "0"
trendRate === 0; // true
trendRate < 0; // true
trendRate > 0; // false

//The Object.is() method determines whether two values are the same value.

Object.is(trendRate, -0); // true
Object.is(trendRate, 0); // false

/* This function returns if a number is positive or negative (including zeroes) using the simbols  "▼" : "▲"*/
function formatTrend(trendRate) {
    var direction =
    (trendRate < 0 || Object.is(trendRate, -0)) ? "▼" : "▲";
    return `${direction} ${Math.abs(trendRate)}`; //Math.abs returns the absolute value of the parameter
}

formatTrend(-3) // "▼ 3"
formatTrend(3) // "▲ 3"
formatTrend(-0) // "▼ 0"
formatTrend(0) // "▲ 0"

//////////

/*
The Math.sign() function returns either a positive or negative +/- 1, indicating the sign of a number passed into the argument. 
If the number passed into Math.sign() is 0, it will return a +/- 0. 
If the number is positive, an explicit (+) will not be returned.
*/

Math.sign(-3); // -1
Math.sign(3); // 1
Math.sign(-0); // -0
Math.sign(0); // 0

// "fix" Math.sign(..) This function returns only -1 ir 1 for negative or positive numbers, including (+/-)zeroes
function sign(v){
    return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

sign(-3); // -1
sign(3); // 1
sign(-0); // -1
sign(0); // 1
