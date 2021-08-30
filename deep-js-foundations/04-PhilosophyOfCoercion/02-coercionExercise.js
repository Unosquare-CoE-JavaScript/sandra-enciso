/* COERCION EXERCISE */
/*
This example shows how coercion works!
*/
/* 
Coercion. Type conversion. The ECMAScript language implicitly performs automatic type conversion as needed.
To clarify the semantics of certain constructs it is useful to define a set of conversion abstract operations.
The conversion abstract operatios are polymorphic, they can accept a value of any ECMAScript language type.
But no other specification types are used with these operations.
*/
/* 
The trim() method removes whitespace from both ends of a string. 
Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) 
and all the line terminator characters (LF, CR, etc.).
*/

//if 'name' is string and the length of the string is greater than or equals to 3 returns true, otherwise returns false
function isValidName(name){
  if(
    typeof name == 'string' &&
    name.trim().length >= 3
  ){
    return true;
  }
    return false;
}

//
function hoursAttended(attended, length){
  if( 
    typeof attended == 'string' &&
    attended.trim() != ''
  ){
      attended = Number(attended); //if 'attended' is a string, then converts its to a number
  }
  
  if(
    typeof length == 'string' &&
    length.trim() != ''
  ){
      length = Number(length); //if 'length' is a string, then converts its to a number
  }
  
  //If the conversion to number was successful, the parameters are 0 or greater than 0, the parameters are integer numbers
  //And attend is less than or equal to length... Then return true, otherwise return false
  if(
    typeof attended == 'number' &&
    typeof length == 'number' &&
    attended >= 0 && 
    length >= 0 &&
    Number.isInteger(attended) &&
    Number.isInteger(length) &&
    attended <= length
  ){
    return true;
  }
  return false;
     
}
   
   
   
   // tests:
   console.log(isValidName("Frank") === true);
   console.log(hoursAttended(6,10) === true);
   console.log(hoursAttended(6,"10") === true);
   console.log(hoursAttended("6",10) === true);
   console.log(hoursAttended("6","10") === true);
   
   console.log(isValidName(false) === false);
   console.log(isValidName(null) === false);
   console.log(isValidName(undefined) === false);
   console.log(isValidName("") === false);
   console.log(isValidName("  \t\n") === false);
   console.log(isValidName("X") === false);
   console.log(hoursAttended("",6) === false);
   console.log(hoursAttended(6,"") === false);
   console.log(hoursAttended("","") === false);
   console.log(hoursAttended("foo",6) === false);
   console.log(hoursAttended(6,"foo") === false);
   console.log(hoursAttended("foo","bar") === false);
   console.log(hoursAttended(null,null) === false);
   console.log(hoursAttended(null,undefined) === false);
   console.log(hoursAttended(undefined,null) === false);
   console.log(hoursAttended(undefined,undefined) === false);
   console.log(hoursAttended(false,false) === false);
   console.log(hoursAttended(false,true) === false);
   console.log(hoursAttended(true,false) === false);
   console.log(hoursAttended(true,true) === false);
   console.log(hoursAttended(10,6) === false);
   console.log(hoursAttended(10,"6") === false);
   console.log(hoursAttended("10",6) === false);
   console.log(hoursAttended("10","6") === false);
   console.log(hoursAttended(6,10.1) === false);
   console.log(hoursAttended(6.1,10) === false);
   console.log(hoursAttended(6,"10.1") === false);
   console.log(hoursAttended("6.1",10) === false);
   console.log(hoursAttended("6.1","10.1") === false);