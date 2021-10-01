/*
var, let and const
let  and const  basically replace var . You use let  instead of var  and const  instead of var  if you plan on never re-assigning this "variable" 
(effectively turning it into a constant therefore).
*/

const myName = 'Max';
console.log(myName); //'Max'

myName = 'Manu'; //TypeError: Assignment to constant variable.
console.log(myName);