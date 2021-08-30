/* OBJECTS ORIENTED */
/*
JavaScript is not a class-based object-oriented language. But it still has ways of using object oriented programming (OOP).
The most popular model of OOP is class-based. But JavaScript isn't a classed-based language, it's a prototype-based language.
A prototype-based language has the notion of a prototypical object, an object used as a template from which to get the initial properties for a new object.
*/
/*
This -> A function's this references the execution context for that call, determined entirely by how the function was called.

A this-aware function can thus have a different context each time it's called, which makes it more flexible and reusable.

*/
//Recall: dynamic scope
var teacher = "kyle";

function ask(question) {
  console.log(teacher, question); //Here it takes teacher from the global variable.
}

function otherClass(){
  var teacher = "Suzy";
  ask("Why?");
}

otherClass(); //'kyle' 'Why?'

//**********************
/* Dymanic Context. JS's Dynamic Scope */
/*
The call() method calls a function with a given this value and arguments provided individually.
Note: While the syntax of this function is almost identical to that of apply(), the fundamental difference is that call() accepts an argument list, 
while apply() accepts a single array of arguments.
*/
function ask(question){
  console.log(this.teacher, question); //the context (this.teacher) is sended from otherClas
}

function otherClass(){ 
  var myContext = { //myContext must be the context (this) passed to ask
    teacher: "Suzy"
  };
  ask.call(myContext, "Why?"); //'Suzy' 'Why?'
}
  
otherClass();

//************************

/* Implicit and explicit binding */
//this: implicit binding


var workshop = {
  teacher: "Kyle",
  ask(question){
    console.log(this.teacher,question); //implicit binding
  },
};
  
workshop.ask("What is implicit binding?"); //'Kyle' 'What is implicit binding?'

//******************************
/* Dynamic binding -> sharing */
function ask(question){
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask: ask,
};

var workshop2 = {
  teacher: "Suzy",
  ask: ask,
};

workshop1.ask("How do I share a method?"); //'Kyle' 'How do I share a method?'

workshop2.ask("How do I share a method?"); //'Suzy' 'How do I share a method?'  

//******************************
/* this: explicit binding */
function ask(question){
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
};

var workshop2 = {
  teacher: "Suzy",
};

ask.call(workshop1, "Can I explicitly set context?");
//'Kyle' 'Can I explicitly set context?'

ask.call(workshop2, "Can I explicitly set context?");
//'Suzy' 'Can I explicitly set context?'

//*******************************

/*this: hard binding*/
/*
The bind() function creates a new bound function, which is an exotic function object
that wraps the original function object. Calling the bound function generally results in the execution of its wrapped function.
*/
var workshop = {
  teacher: "Kyle",
  ask(question){
    console.log(this.teacher, question);
  },
}

setTimeout(workshop.ask, 10, "Lost this?"); //undefined 'Lost this?'

//Invoke and use workshop as context
setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this?"); //'Kyle' 'Hard bound this?'

/* Constructor calls */
/*
The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
The new keyword does the following things:
1. Creates a blank, plain JavaScript object.
2. Adds a property to the new object (__proto__) that links to the constructor function's prototype object
3. Binds the newly created object instance as the this context (i.e. all references to this in the constructor function now refer to the object created in the first step).
4. Returns this if the function doesn't return an object.
*/

function ask(question){
  console.log(this.teacher, question);
}

var newEmptyObject = new ask("What is 'new' doing here?");
//undefined "What is 'new' doing here?"

/* new: steps */
/*
1. Create a brand new empty object
2. *Link that object to another object
3. Call function with this set to the new object
4. If function does not return an object, assume return of this
*/

//*************************
/* this: default binding */
/*
When default binding is applied, the global object will be bind to the called function, this works if strict mode is not set either inside or outside the definition scope 
of the called function, but if 'use strict' is set at one of them, then this = undefined.
*/
var teacher = "Kyle";

function ask(question){
  console.log(this.teacher, question);
}

function askAgain(question) {
  "use strict";
  console.log(this.teacher, question);
}

ask("What's the non-strict-mode default?");
//'Kyle' "What's the non-strict-mode default?"

askAgain("What's the strict-mode default?");
//TypeError: Cannot read property 'teacher' of undefined

//*************************

/* this: binding rule precedence? */

var workshop = {
  teacher: "Kyle",
  ask: function ask(question){
    console.log(this.teacher,question);
  },
};

new (workshop.ask.bind(workshop))("What does this do?");
// undefined 'What does this do?'
