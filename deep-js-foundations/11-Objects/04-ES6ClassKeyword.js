/*
Class{}
The class expression is one way to define a class in ECMAScript 2015. Similar to function expressions, class expressions can be named or unnamed. 
If named, the name of the class is local to the class body only.
JavaScript classes use prototype-based inheritance.
*/

class Workshop {
    constructor(teacher) {
      this.teacher = teacher;
    }
    ask(question){
      console.log(this.teacher, question);
    }
  }
  
  var deepJS = new Workshop("Kyle");
  var reactJS = new Workshop("Suzy");
  
  deepJS.ask("Is 'class' a class?"); //'Kyle' "Is 'class' a class?"
  
  reactJS.ask("Is this class OK?");
  //'Suzy' 'Is this class OK?'

  //***********************

  class Workshop {
    constructor(teacher){
      this.teacher = teacher;
    }
    ask(question){
      console.log(this.teacher, question);
    }
  }
  
  class AnotherWorkshop extends Workshop {
    speakUp(msg){
      this.ask(msg);
    }
  }
  
  var JSRecentParts = new AnotherWorkshop("Kyle");
  
  JSRecentParts.speakUp("Areclasses getting better?");
  //'Kyle' 'Areclasses getting better?'

  //***********

  /* ES6 class: super (relative polymorphism) */
class Workshop {
    constructor(teacher){
      this.teacher = teacher;
    }
    ask(question){
      console.log(this.teacher, question);
    }
  }
  
  class AnotherWorkshop extends Workshop {
    speakUp(msg){
      super.ask(msg.toUpperCase()); //Refering to the parent
    }
  }
  
  var JSRecentParts = new AnotherWorkshop("Kyle");
  
  JSRecentParts.speakUp("Areclasses getting better?");
  //'Kyle' 'ARECLASSES GETTING BETTER?'

  //***************

  /* ES6 class: super (relative polymorphism) */
class Workshop {
    constructor(teacher){
      this.teacher = teacher;
    }
    ask(question){
      console.log(this.teacher, question);
    }
  }
  
  var deepJS = new Workshop("Kyle");
  
  setTimeout(deepJS.ask, 100, "Still losing 'this'?");
  //undefined "Still losing 'this'?"

  //********************

  /* ES6 class: "fixing" this? */
class Workshop { //The methods doesn't exist in your instances, they exists in your prototipes
    constructor(teacher){
      this.teacher = teacher,
      this.ask = question => {
        console.log(this.teacher, question);
      };
    }
  }
  
  var deepJS = new Workshop("Kyle");
  
  setTimeout(deepJS.ask, 100, "Is 'this' fixed?");
  //'Kyle' "Is 'this' fixed?"

  //************************* */

  /* ES6 class: hackastrophy */

var method = (function defineMethod(){
    var instances = new WeeakMap();
    
    return function method(obj, methodName, fn) { //takes the existence method and replaces
      Object.defineProperty(obj, methodName, {
        get() {
          if(!instances.has(this)) {
            instances.set(this,{});
          }
          var methods = instances.get(this);
          if(!(methodName in methods)) {
            methods[methodName] = fn.bind(this);
          }
          return methods[methodName];
        }
      });
    }
  })();
  
  function bindMethods(obj) {
    for(let ownProp of Object.getOwnPropertyNames(obj)) {
      if(typeof obj[ownProp] == "funcion"){
        method(obj, ownProp, obj[ownProp]);
      }
    }
  }

  //**********************

  /* ES6 class: inheritable hard this-bound methods */
/* ES6 class: inheritable hard this-bound methods */
function bindMethods(obj) {
    for(let ownProp of Object.getOwnPropertyNames(obj)) {
      if(typeof obj[ownProp] == "funcion"){
        method(obj, ownProp, obj[ownProp]);
      }
    }
  }

class Workshop {
  constructor(teacher){
    this.teacher = teacher;
  }
  ask(question){
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  speakUp(msg) {
    this.ask(msg);
  }
}

var JSRecentParts = new AnotherWorkshop("Kyle");

bindMethods(Workshop.prototype);
bindMethods(AnotherWorkshop.prototype);

JSRecentParts.speakUp("What's different here?")
// Kyle What's different here?

setTimeout(JSRecentParts.speakUp,100,"Oh! But does this feel gross?");
// Kyle Oh! But does this feel gross?