/* Equality Exercise */
/*
The following function loops the arr argumet and copares if any value is equal to match
then, it creates a new array with the types involved
*/
/*
The Object.is() method determines whether two values are the same value.
*/
function findAll(match, arr){
  var ret = [];
  for (let v of arr){ //loops arr
    if (Object.is(match, v)) { //compares if match has the same value of v
      ret.push(v); //Then push v to ret array
    }
    else if (match == null && v == null) {
      ret.push(v);
    }
    else if (typeof match == 'boolean' && typeof v == 'boolean'){
      if(match === v){
        ret.push(v);
      }
    }
    else if (typeof match == 'string' && match.trim() != '' && typeof v == 'number' && !Object.is(v, -0)){
      if (match == v) {
        ret.push(v);
      }
    }
    else if( //If match is a number, and isn't -0, NaN, Infinity, -Infinity and v is a string push v to ret
      typeof match == 'number' &&
      !Object.is(match, -0) &&
      !Object.is(match, NaN) &&
      !Object.is(match, Infinity) &&
      !Object.is(match, -Infinity) &&
      typeof v == 'string' &&
      v.trim() != ''
    ){
      if(match == v){
        ret.push(v);
      }
    }
  }
  return ret;
}

// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************
/*
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/
/*The function below compares if the two arguments are arrays and if contains the same values*/
function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}