/*
A block scope is the area within if, switch conditions or for and while loops.
Generally speaking, whenever you see {curly brackets}, it is a block.
*/
/*
Instead of an IIFE?
*/

var teacher = "Kyle";
(function anotherTeacher() {
    var teacher = "Suzy";
    console.log(teacher); // 'Suzy'
})();

console.log(teacher); // 'Kyle'

//***********************
/* Block Scoping: encapsulation*/
var teacher = "kyle";

{
    let teacher = "Suzy";
    console.log(teacher); // 'Suzy'
}

console.log(teacher); // 'Kyle'

//***********************
function diff(x,y){
    if (x > y) {
      var tmp = x;
      x = y;
      y = tmp;
    }
    return y - x;
  }
  
  /*Block Scoping: let*/
  function diff(x,y){
    if (x > y) {
      let tmp = x;
      x = y;
      y = tmp;
    }
    return y - x;
  }