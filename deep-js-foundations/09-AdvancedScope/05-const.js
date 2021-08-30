/*
Const
Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.
The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable—just that the variable identifier cannot be reassigned. 
For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.
*/
//Is prefer to use const only for primitive values, because if you use it with objects, maybe don't works as you expected:
//Kyle says: Use var by default, use let if is useful and use const only for primitive values
var teacher = "Suzy";
teacher = "Kyle";

const myTeacher = teacher;
myTeacher = "Suzy"; //ypeError: Assignment to constant variable.

const teachers = ["Kyle", "Suzy"];
teachers[1] = "Brian"; //Allowed!

//*******************************