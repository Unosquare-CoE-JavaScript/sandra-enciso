/*
Encompases: Named function expressions, function expressions, arrow functions, promises
*/
/*
Named Function Expressions: Benefits
1. Reliable function self-reference (recursion, etc)
2. More debuggable stack traces
3. More self-documenting code
*/

/*Function Expressions*/
//Function expression is a function assigned to a variable
var clickHandler = function(){
    //..
};
  
var keyHandler = function keyHandler(){
  //..
};
  
//************************************
/*
An arrow function expression is a compact alternative to a traditional function expression, 
but is limited and can't be used in all situations.
Differences & Limitations:

Does not have its own bindings to this or super, and should not be used as methods.
Does not have new.target keyword.
Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
Can not be used as constructors.
Can not use yield, within its body.
*/

var ids = people.map(person => person.id); //person is an attribute. person.id is the value returned
var ids = people.map(function getId(person){
  return person.id;
});


//************************************
//Named Function Expressions vs. Anonymous Arrow Functions
/*
The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
Note: If one or both arguments are omitted or are provided non-functions, then then will be missing the handler(s), but will not generate any errors. 
If the Promise that then is called on adopts a state (fulfillment or rejection) for which then has no handler, 
the returned promise adopts the final state of the original Promise on which then was called.
*/
getPerson()
.then(person => getData(person.id))
.then(renderData);

getPerson()
.then(function getDataFrom(person){
  return getData(person.id);
})
.then(renderData);

//************************************
var getId = person => person.id;
var ids = people.map(getId);
//************

var getDataFrom = person => getData(person.id);
getPerson()
.then(getDataFrom)
.then(renderData);