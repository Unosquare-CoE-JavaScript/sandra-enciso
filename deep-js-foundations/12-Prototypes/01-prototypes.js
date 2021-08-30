/*Prototypes*/
/*
Objects are built by "constructor calls" (via new)
A "constructor call" makes an object linked to its own prototype
*/

/*old school way to do prototypes as classes*/

function Workshop(teacher){
    this.teacher = teacher;
  }
  Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
  };
  
  var deepJS = new Workshop("Kyle");
  var reactJS = new Workshop("Suzy");
  
  deepJS.ask("Is 'prototype' a class?");
  //'Kyle' "Is 'prototype' a class?"
  
  reactJS.ask("Isn't 'prototype' ugly?")
  //'Suzy' "Isn't 'prototype' ugly?"

  //*************** */

  /*Prototypes*/
/* Arrow functions doesnt have prototype */
/*
The __proto__ property
This points to the object which is used as a prototype.
This is the property on every object that gives it access to the Object prototype property.
Every object has this property by default, which refers to the Object Protoype except when configured otherwise (that is, when the object's __proto__ is pointed to another prototype).
*/
function Workshop(teacher) {
    this.teacher = teacher;
  }
  
  Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
  };
  
  var deepJS = new Workshop("Kyle");
  
  deepJS.constructor === Workshop; //true
  
  deepJS.__proto__ === Workshop.prototype; //true
  Object.getPrototypeOf(deepJS) === Workshop.prototype; //true

  /**************************** */

  /* Shadowing prototypes */

function Workshop(teacher){
    this.teacher = teacher;
  }
  
  Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
  };
  
  var deepJS = new Workshop("Kyle");
  
  deepJS.ask = function(question){ //it calls itself
    this.ask(question.toUpperCase());
  };
  
  deepJS.ask("Oops, is this infinite recursion?");
  //RangeError: Maximum call stack size exceeded

 /**************************** */
/* Shadowing */

function Workshop(teacher){
    this.teacher = teacher;
  }
  
  Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
  };
  
  var deepJS = new Workshop("Kyle");
  
  //
  deepJS.ask = function(question){ // Not is the best
    this.__proto__.ask.call(this, question.toUpperCase());
  };
  
  deepJS.ask("Oops, is this infinite recursion?");
  //'Kyle' 'OOPS, IS THIS INFINITE RECURSION?'

  //************** */
  /* 
Prototypal Inheritance
*/

function Workshop(teacher){
    this.teacher = teacher;
  }
  Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
  };
  
  function AnotherWorkshop(teacher){
    Workshop.call(this, teacher);
  }
  
  AnotherWorkshop.prototype = Object.create(Workshop.prototype);
  
  AnotherWorkshop.prototype.speakUp = function(msg){
    this.ask(msg.toUpperCase());
  };
  
  var JSRecentParts = new AnotherWorkshop("Kyle");
  
  JSRecentParts.speakUp("Is this actually inheritance?")
  //'Kyle' 'IS THIS ACTUALLY INHERITANCE?'