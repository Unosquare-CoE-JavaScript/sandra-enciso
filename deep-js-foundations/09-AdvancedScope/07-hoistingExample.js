/*Scope: Hoisting*/
var teacher = "Kyle";
otherTeacher();

function otherTeacher() { //Here exist another var teacher and is only accessible for this function, so the hoisting works like
  //var teacher; So when you try to use it in the next line, is udefined
  console.log(teacher); //undefined
  var teacher = "Suzy";
}

//***********
/* var vs let hoisting */
teacher = "Kyle"; //'Kyle'
var teacher;

getTeacher(); // 'Kyle'

function getTeacher(){
  return teacher;
}

/*let doesn't hoist? false*/
/*Its better to put let and const to the top of the code to not handle with TDZ*/
{
    teacher = "Kyle"; //TDZ error //ReferenceError: Cannot access 'teacher' before initialization
    let teacher;
  }
  
  var teacher = "Kyle";
  
  { //Block Scope
    console.log(teacher); //ReferenceError: Cannot access 'teacher' before initialization
    let teacher = "Suzy";
  }
  
  /*
  let and const declarations define variables that are scoped to he running execution context's LexicalEnviroment. The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable's LexicalBinding is evaluated. A variable defined by a LexicalBinding with an Initializar is assignd the value of its Initializer's AssignmentExpression when the Lexical Binding is evaluated, not when the variable is created. If a LexicalBinding in a let declaration does not have an Initializar the variable is assigned the value undefined when the Lexical Binding is evaluated.
  */
  