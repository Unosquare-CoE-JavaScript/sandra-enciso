/*
TypeScript, Flow, and type-aware linting
*/
/*
TypeScript and Flow: Pros and Cons
They make types more obvious in code.
Familiarity: they look like other language's type systems
They use "non-JS-standard" syntax (or code comments)
They require a build process, which raises the barrier to entry
They focus more on "static types" (variables, parameters, returns, properties, etc) than value types
The only way to have confidence over the runtime behavior is to limit/eliminate dynamic typing
*/

/*TypeScript and Flow*/
var teacher = "Kyle";
// ..
teacher = {name: "kyle"};
//Error: can't assign object
//to string

var teacher: string = "Kyle";
teacher = {name: "kyle"};
//Error: can't assign object to string

//**************************

type student = {name: string};

function getName(studentRec: student) : string {
  return studentRec.name;
}

var firstStudent: student = { name: "Frank" };

var firstStudentName: string = getName(firstStudent);

///**************************

var studentName: string = "Frank";
var studentCount: number = 16 - studentName;
// error: can't substract string