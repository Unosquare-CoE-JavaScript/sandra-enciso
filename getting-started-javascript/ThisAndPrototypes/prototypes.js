/* Prototypes: as "classes" */

function Workshop(teacher){
    this.teacher = teacher;
  }
  
  Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
  };
  
  var deepJS = new Workshop("Kyle");
  var reactJS = new Workshop("Susy");
  
  deepJS.ask("Is 'prototype' a class?");
  reactJS.ask("Isn't 'prototype' ugly?");
  
  /* Prototypes means:
    That is a object where any instances are gonna be leads or delegate to
  */