/* 
OLOO: Objects Linked to Other Objects
Object oriented, class oriented
*/
/*

*/

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}
  
class AnotherWorkshop extends Workshop {
  speakUp(msg){
    this.ask(msg);
  }
}
  
var JSRecentParts = new AnotherWorkshop("Kyle");

JSRecentParts.speakUp("Are classes getting better?");
//'Kyle' 'Are classes getting better?'

//***********************
/* OLOO: delegated objects */
var Workshop = {
  setTeacher(teacher) {
    this.teacher = teacher;
  },
  ask(question) {
    console.log(this.teacher, question); 
  }  
};

//The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. 
//It returns the modified target object.
var AnotherWorkshop = Object.assign(
  Object.create(Workshop), //The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
  {
    speakUp(msg) {
      this.ask(msg.toUpperCase());
    }
  }
);

var JSRecentParts = Object.create(AnotherWorkshop);
JSRecentParts.setTeacher("Kyle");
JSRecentParts.speakUp("But isn't this cleaner?");
//'Kyle' "BUT ISN'T THIS CLEANER?"

//***********************

//***********************
/* OLOO: Object.create() */

if(!object.create) {
  Object.create = function (o) {
    function F(){}
    F.prototype = o;
    return new F();
  }
}