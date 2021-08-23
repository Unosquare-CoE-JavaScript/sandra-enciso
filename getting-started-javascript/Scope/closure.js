/*
  Closure is when a function "remembers" the variables outside of it, even if you pass that function elsewhere
  
*/

function ask(question){
    setTimeout(() => {
      console.log(question);
    }, 100);
  }
  
  ask("What is closure?");
  
  /////////
  
  function ask2(question){
    return function holdYOurQuestion(){
      console.log(question);
    }
  }
  
  var myQuestion = ask2('What is Closure?');
  
  myQuestion();