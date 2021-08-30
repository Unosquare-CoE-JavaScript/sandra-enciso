/* Closure 
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
In other words, a closure gives you access to an outer function’s scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.
*/
/*
Brendan Eich. The creator of JavaScript
*/

/*
What is closure? Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.
*/

function ask(question){
    setTimeout(function waitASec(){
        console.log(question); //Here access to the 'question' which is created outside this scope. That is closure
    },100);
  }
  
  ask("What is closure?"); //'What is closure?'
  
  //**************
  
  function ask(question){
    return function holdYourQuestion(){
      console.log(question);
    };
  }
  
  var myQuestion = ask("What is closure?");
  myQuestion(); //'What is closure?'

  var teacher = "Kyle";

var myTeacher = function(){
  console.log(teacher);
};

teacher = "Suzy";

myTeacher(); // 'Suzy';

//**************************

for(var i = 1; i <= 3; i++){
  setTimeout(function(){
    console.log('i :'+i)
  }, i * 1000)
}
// 'i :4'
// 'i :4'
// 'i :4'

//*******************
/*Is necessary to use more than 1 varible to work as we spected*/
for(var i = 1; i <= 3; i++){
  let j = i; //a new variable let j is created each time of the loop
  setTimeout(function(){
    console.log('j :'+j)
  }, j * 1000)
}
// 'j :1'
// 'j :2'
// 'j :3'

//*********************
for(let i = 1; i <= 3; i++){ //let exists and is created in each time of the loop, because let is block scope
  setTimeout(function(){
    console.log('i :'+i)
  }, i * 1000)
}
// 'j :1'
// 'j :2'
// 'j :3'

/*Closure is about the persevation of the variable*/