/*
  this/prototype
  *this
    A function's this references the execution context for that call, determined entirely by how the function was called.
    A this-aware function can this have a different context each time its called, which makes it more flexible $ reusable
  *prototypes
  *class{}
*/

//this: dynamic context  

var workshop = {
    teacher: "Kyle",
    ask(question){
      console.log(this.teacher, question);
    },
  }
  
  workshop.ask("What is implicit binding?");

function ask(question){
    console.log(this.teacher, question);
}

function otherClass(){
    var myContext = {
        teacher: "Susy"
    };
    ask.call(myContext, "Why?");
}

otherClass();