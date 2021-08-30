/*
Encompasses NaN, isNaN, Number
*/
/*
NaN doesn't means "not a number". NaN: "Invalid Number".
The numbers can be represented not only using numbers, for example hex notation...
*/

//Number helps to convert to number the sended parameter
var myAge = Number("0o46"); //38 This is Hex notation
var myNextAge = Number("39"); //39
var myCatsAge = Number("n/a"); //NaN This is not a form to represent a number
myAge - "my son's age"; //NaN

//NaN doesn't have the property to compares itself
myCatsAge === myCatsAge; //false

//isNaN helps to evaluate if a value is NaN
isNaN(myAge); //false
isNaN(myCatsAge); //true
isNaN("my son's age"); //true

Number.isNaN(myCatsAge); //true
Number.isNaN("my son's age"); //false